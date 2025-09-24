import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";
import {cn} from "../lib/utils.js";

export const ThemeToggler = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        const dark = storedTheme === "dark";
        setDarkMode(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, [])

    const toggleDarkMode = () => {
        const newIsDarkMode= !isDarkMode;   // we create a new variable because setDarkMode is async
        setDarkMode(newIsDarkMode);
        const theme = newIsDarkMode ? "dark" : "light";

        if (newIsDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }

    return (
        <button
            onClick={toggleDarkMode}
            className={cn("rounded-lg p-2 z-80 shadow-sm shadow-white h-auto hover:shadow-[0_3px_10px_rgb(255,255,255)] transition-shadow duration-400")}
        >
            {isDarkMode
                ? <Sun className="h-5 w-5 text-gray-200"/>
                : <Moon className="h-5 w-5 text-navy-600"/>
            }
        </button>
    )
}