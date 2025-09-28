"use client";
import { useMotionValue, useMotionTemplate, motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
    sm: { card: "w-40 h-40", circle: "h-24 w-24 text-xl" },
    md: { card: "w-56 h-56", circle: "h-36 w-36 text-2xl" },
    lg: { card: "w-72 h-72", circle: "h-44 w-44 text-4xl" },
};

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

const EvervaultCard = ({
                           text,
                           className,
                           size = "md",
                           colorLeft = "#3b82f6", // default Tailwind sky-500
                           colorRight = "#06b6d4", // default Tailwind cyan-500
                       }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        setRandomString(generateRandomString(1500));
    }, []);

    const onMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
        setRandomString(generateRandomString(1500));
    };

    return (
        <div
            className={cn(
                "p-0.5 bg-transparent aspect-square flex items-center justify-center relative",
                sizeClasses[size].card,
                className
            )}
        >
            <div
                onMouseMove={onMouseMove}
                className="group/card rounded-full relative overflow-hidden bg-gray-50 dark:bg-transparent flex items-center justify-center w-full h-full shadow-lg shadow-gray-600/20"
            >
                <CardPattern
                    mouseX={mouseX}
                    mouseY={mouseY}
                    randomString={randomString}
                    colorLeft={colorLeft}
                    colorRight={colorRight}
                />
                <div className="relative z-10 flex items-center justify-center">
                    <div
                        className={cn(
                            "relative rounded-full flex items-center justify-center text-white font-bold",
                            sizeClasses[size].circle
                        )}
                    >
                        <div className="absolute w-full h-full bg-blue-300/30 dark:bg-gray-600/30 blur-sm rounded-full" />
                        <span className="dark:text-white text-black z-20 text-center">{text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardPattern = ({ mouseX, mouseY, randomString, colorLeft, colorRight }) => {
    const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = {
        maskImage,
        WebkitMaskImage: maskImage,
        backgroundImage: `linear-gradient(to right, ${colorLeft}, ${colorRight})`,
    };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
                style={style}
            >
                <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
};

export default EvervaultCard;
