"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const AnimatedTooltip = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            {items.map((item) => (
                <div
                    className="group relative -mr-4"
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                style={{ willChange: "transform, opacity" }}
                                className="absolute -top-16 left-1/2 z-50 -translate-x-1/2
                                            rounded-md bg-black px-3 py-2 text-center shadow-lg"
                                >
                                <div className="text-sm font-semibold text-white">
                                    {item.name}
                                </div>
                                {item.designation && (
                                    <div className="text-xs text-gray-300">
                                        {item.designation}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <img
                        src={item.image}
                        alt={item.name}
                        className="relative h-14 w-14 rounded-full border-2 border-black
                       dark:border-white object-cover object-top
                       transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            ))}
        </>
    );
};
