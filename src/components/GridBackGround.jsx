import { cn } from "@/lib/utils";
import React from "react";

export default function GridBackground({children}) {
    return (
        <div
            className="relative flex h-full w-full items-center justify-center p-4 bg-gray-200 dark:bg-[#030412]">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#d0d0d0_1px,transparent_1px),linear-gradient(to_bottom,#d0d0d0_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />
            {/* Radial gradient for the container to give a faded look */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-200 [mask-image:radial-gradient(ellipse_at_center,transparent_2%,#030412)] dark:bg-primary"></div>
            {children}
        </div>
    );
}
