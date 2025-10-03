"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
    IconSearch,
    IconWorld,
    IconCommand,
    IconCaretLeftFilled,
    IconCaretDownFilled,
} from "@tabler/icons-react";

export const MacbookScroll = ({ src, showGradient, title, badge }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
    const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="flex min-h-[110vh] flex-col items-center justify-start py-0 scale-35 sm:scale-50 md:scale-100 md:py-20"
        >
            <motion.div
                style={{ translateY: textTransform, opacity: textOpacity }}
                className="mb-20 text-center text-2xl font-bold text-primary dark:text-white"
            >
                {title || (
                    <div>
                        <p className="text-4xl">myReserva.</p>
                        <p>Full-Stack App</p>
                    </div>
                )}
            </motion.div>

            <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />

            <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-[#272729]">
                <div className="relative h-10 w-full">
                    <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
                </div>

                <div className="relative flex">
                    <div className="mx-auto h-full w-[10%]">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto h-full w-[80%]">
                        <Keypad />
                    </div>
                    <div className="mx-auto h-full w-[10%]">
                        <SpeakerGrid />
                    </div>
                </div>

                <Trackpad />

                <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-t-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />

                {showGradient && (
                    <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
                )}

                {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
            </div>
        </div>
    );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src }) => (
    <div className="relative perspective-[800px]">
        {/* Lid Frame */}
        <div
            className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
            style={{
                transform: "perspective(800px) rotateX(-25deg)",
                transformOrigin: "bottom",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101] shadow-inner shadow-neutral-800">
        <span className="text-white">
          <img src="/assets/react.svg" alt="" />
        </span>
            </div>
        </div>

        {/* Project Image overlayed on screen */}
        <motion.div
            style={{ scaleX, scaleY, rotateX: rotate, translateY: translate }}
            className="absolute bottom-0 left-4 h-[12rem] w-[30rem] rounded-2xl bg-[#010101] p-2"
        >
            <div className="absolute inset-0 rounded-lg" />
            <img
                src={src}
                alt="Project Image"
                className="absolute inset-0 h-[13-rem] w-[32rem] rounded-lg object-contain object-top -translate-y-20"
            />
        </motion.div>
    </div>
);


export const Trackpad = () => (
    <div className="mx-auto my-1 h-32 w-[40%] rounded-xl bg-[#111] shadow-inner" />
);

export const SpeakerGrid = () => (
    <div
        className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
        style={{
            backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
            backgroundSize: "3px 3px",
        }}
    />
);

export const Keypad = () => {
    // Function keys row
    const topRow = [
        { label: "esc" },
        { icon: <IconBrightnessDown size={10} />, label: "F1" },
        { icon: <IconBrightnessUp size={10} />, label: "F2" },
        { icon: <IconTable size={10} />, label: "F3" },
        { icon: <IconSearch size={10} />, label: "F4" },
        { icon: <IconMicrophone size={10} />, label: "F5" },
        { icon: <IconMoon size={10} />, label: "F6" },
        { icon: <IconPlayerTrackPrev size={10} />, label: "F7" },
        { icon: <IconPlayerSkipForward size={10} />, label: "F8" },
        { icon: <IconPlayerTrackNext size={10} />, label: "F9" },
        { icon: <IconVolume3 size={10} />, label: "F10" },
        { icon: <IconVolume2 size={10} />, label: "F11" },
        { icon: <IconVolume size={10} />, label: "F12" },
    ];

    // Row 2: numbers and symbols
    const numberRow = ["`~", "1!", "2@", "3#", "4$", "5%", "6^", "7&", "8*", "9(", "0)", "-_", "=+"];

    // Row 3: QWERTY
    const qwertyRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[{", "]}","\\|"];

    // Row 4: ASDF
    const asdfRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";:", "'\""];

    // Row 5: ZXCV
    const zxcvRow = ["Z", "X", "C", "V", "B", "N", "M", ",<", ".>", "/?"];

    return (
        <div className="mx-1 h-full rounded-md bg-[#050505] p-1 space-y-1 text-[6px]">
            {/* Top function row */}
            <div className="flex gap-1">
                {topRow.map((key, i) => (
                    <KBtn key={i}>
                        {key.icon}
                        {key.label}
                    </KBtn>
                ))}
                <KBtn>
                    <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-700 to-black" />
                </KBtn>
            </div>

            {/* Numbers row */}
            <div className="flex gap-1">
                {numberRow.map((pair, i) => (
                    <KBtn key={i}>
                        <span>{pair[0]}</span>
                        <span>{pair[1]}</span>
                    </KBtn>
                ))}
                <KBtn className="w-10">delete</KBtn>
            </div>

            {/* QWERTY row */}
            <div className="flex gap-1">
                <KBtn className="w-10">tab</KBtn>
                {qwertyRow.map((key, i) => (
                    <KBtn key={i}>{key}</KBtn>
                ))}
            </div>

            {/* ASDF row */}
            <div className="flex gap-1">
                <KBtn className="w-[2.8rem]">caps lock</KBtn>
                {asdfRow.map((key, i) => (
                    <KBtn key={i}>{key}</KBtn>
                ))}
                <KBtn className="w-[2.85rem]">return</KBtn>
            </div>

            {/* ZXCV row */}
            <div className="flex gap-1">
                <KBtn className="w-[3.65rem]">shift</KBtn>
                {zxcvRow.map((key, i) => (
                    <KBtn key={i}>{key}</KBtn>
                ))}
                <KBtn className="w-[3.65rem]">shift</KBtn>
            </div>

            {/* Bottom row with fn, control, command, arrows */}
            <div className="flex gap-1 items-end">
                <KBtn>
                    <span>fn</span>
                    <IconWorld size={10} />
                </KBtn>
                <KBtn>
                    <IconChevronUp size={10} />
                    <span>control</span>
                </KBtn>
                <KBtn>
                    <OptionKey className="h-2 w-2" />
                    <span>option</span>
                </KBtn>
                <KBtn className="w-8">
                    <IconCommand size={10} />
                    <span>command</span>
                </KBtn>
                <KBtn className="w-[8.2rem]" /> {/* spacebar */}
                <KBtn className="w-8">
                    <IconCommand size={10} />
                    <span>command</span>
                </KBtn>
                <KBtn>
                    <OptionKey className="h-2 w-2" />
                    <span>option</span>
                </KBtn>
                <div className="flex flex-col items-center justify-center ml-1">
                    <KBtn className="h-4 w-6">
                        <IconCaretUpFilled size={10} />
                    </KBtn>
                    <div className="flex gap-1">
                        <KBtn className="h-4 w-6">
                            <IconCaretLeftFilled size={10} />
                        </KBtn>
                        <KBtn className="h-4 w-6">
                            <IconCaretDownFilled size={10} />
                        </KBtn>
                        <KBtn className="h-4 w-6">
                            <IconCaretRightFilled size={10} />
                        </KBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const KBtn = ({ children, className = "", backlit = true }) => {
    return (
        <button
            className={cn(
                "flex h-6 w-6 flex-col items-center justify-center rounded-sm bg-[#0A090D] text-neutral-200",
                "transition-colors duration-150 text-[5px]",
                backlit && "ring-1 ring-white/20 shadow-sm text-white",
                className
            )}
        >
            {children}
        </button>
    );
};


export const OptionKey = ({
                              className
                          }) => {
    return (
        <svg
            fill="none"
            version="1.1"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={className}>
            <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
            <polygon
                stroke="currentColor"
                strokeWidth={2}
                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />
            <rect
                id="_Transparent_Rectangle_"
                className="st0"
                width="32"
                height="32"
                stroke="none" />
        </svg>
    );
};



