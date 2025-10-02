"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

export const Vortex = ({ particleCount = 400, baseHue = 220, rangeY = 200, backgroundColor = "#000000", children, className, containerClassName }) => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef();
    const noise3D = createNoise3D();
    let tick = 0;
    let particleProps = [];

    const rand = n => Math.random() * n;
    const randRange = n => n - rand(2 * n);
    const fadeInOut = (t, m) => Math.abs(((t + m/2) % m) - m/2) / (m/2);

    const setupParticles = (canvas) => {
        particleProps = [];
        for (let i = 0; i < particleCount; i++) {
            particleProps.push({
                x: rand(canvas.width),
                y: randRange(rangeY),
                vx: 0,
                vy: 0,
                life: 0,
                ttl: 50 + rand(150),
                speed: 0.5 + rand(1),
                radius: 1 + rand(2),
                hue: baseHue + rand(100),
            });
        }
    };

    const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let p of particleProps) {
            const n = noise3D(p.x * 0.00125, p.y * 0.00125, tick * 0.0005) * 2 * Math.PI * 3;
            p.vx = 0.5 * p.vx + 0.5 * Math.cos(n);
            p.vy = 0.5 * p.vy + 0.5 * Math.sin(n);

            const x2 = p.x + p.vx * p.speed;
            const y2 = p.y + p.vy * p.speed;

            ctx.beginPath();
            ctx.lineCap = "round";
            ctx.lineWidth = p.radius;
            ctx.strokeStyle = `hsla(${p.hue},100%,60%,${fadeInOut(p.life, p.ttl)})`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            p.x = x2;
            p.y = y2;
            p.life++;
            if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height || p.life > p.ttl) {
                // reset particle
                p.x = rand(canvas.width);
                p.y = randRange(rangeY);
                p.life = 0;
            }
        }

        animationFrameId.current = requestAnimationFrame(draw);
    };

    const resize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setupParticles(canvas);
    };

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize);
        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId.current);
        };
    }, []);

    return (
        <div className={cn("relative h-full w-full", containerClassName)}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
            >
                <canvas ref={canvasRef} />
            </motion.div>
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
