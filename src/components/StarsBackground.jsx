"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export const StarsBackground = ({
                                    starDensity = 0.00015,
                                    allStarsTwinkle = true,
                                    twinkleProbability = 0.7,
                                    minTwinkleSpeed = 0.5,
                                    maxTwinkleSpeed = 1,
                                    className,
                                }) => {
    const [stars, setStars] = useState([]);
    const canvasRef = useRef(null);

    // Generate stars for given width/height
    const generateStars = useCallback(
        (width, height) => {
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.7 + 0.5,
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                };
            });
        },
        [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
    );

    // Initialize stars and resize canvas
    const updateStars = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const width = parent.clientWidth;
        const height = parent.clientHeight;

        canvas.width = width;
        canvas.height = height;

        setStars(generateStars(width, height));
    }, [generateStars]);

    useEffect(() => {
        updateStars();

        // ResizeObserver to handle section resize
        const resizeObserver = new ResizeObserver(updateStars);
        if (canvasRef.current?.parentElement) {
            resizeObserver.observe(canvasRef.current.parentElement);
        }

        return () => {
            if (canvasRef.current?.parentElement) {
                resizeObserver.unobserve(canvasRef.current.parentElement);
            }
        };
    }, [updateStars]);

    // Animate stars
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                if (star.twinkleSpeed !== null) {
                    star.opacity = 0.5 + Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [stars]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute top-0 w-screen h-screen inset-0 left-1/2 -translate-x-1/2", className)}
        />
    );
};
