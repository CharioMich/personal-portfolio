// import { Menu, X} from "lucide-react";
// import {motion} from "motion/react"
// import {useState} from "react";
// import {ThemeToggler} from "../components/ThemeToggler.jsx";
//
//
// function Navigation() {
//     return (
//         <ul className="nav-ul">
//             <li className="nav-li">
//                 <a href="#hero" className="nav-link">Home</a>
//             </li>
//             <li className="nav-li">
//                 <a href="#about" className="nav-link">About</a>
//             </li>
//             <li className="nav-li">
//                 <a href="#projects" className="nav-link">Projects</a>
//             </li>
//             <li className="nav-li">
//                 <a href="#contact" className="nav-link">Contact</a>
//             </li>
//         </ul>
//     );
// }
//
//
// const Navbar = () => {
//
//     const [isOpen, setIsOpen] = useState(false);
//
//     return (
//         <div className="fixed inset-x-0 z-20 w-full p-2 backdrop-blur-sm bg-transparent">
//             <div className="mx-auto c-space max-w-7xl">
//                 <div className="flex items-center justify-between py-2 sm:py-0">
//                     <div>
//                         <ThemeToggler />
//                         {/*<a*/}
//                         {/*    href="/"*/}
//                         {/*    className="text-xl ml-4 font-bold transition-colors text-neutral-400 hover:text-white"*/}
//                         {/*>Babis</a>*/}
//                     </div>
//
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
//                     >
//                         {isOpen
//                             ? <X />
//                             : <Menu />
//                         }
//                     </button>
//                     <nav className="hidden sm:flex">
//                         <Navigation />
//                     </nav>
//                 </div>
//             </div>
//             {isOpen && (
//                 <motion.div
//                     className="block overflow-hidden text-center sm:hidden"
//                     initial={{opacity: 0, y: -20}}
//                     animate={{opacity: 1, y: 0}}
//                     style={{maxHeight: '100vh'}}
//                     transition={{duration: 1}}
//                 >
//                     <nav className="pb-5">
//                         <Navigation />
//                     </nav>
//                 </motion.div>
//             )}
//         </div>
//     )
// }
//
// export default Navbar;

// components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggler } from "../components/ThemeToggler.jsx";

const LINKS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

function Navigation({ activeSection, onLinkClick }) {
    return (
        <ul className="nav-ul flex gap-4">
            {LINKS.map((l) => (
                <li key={l.id} className="nav-li">
                    <a
                        href={`#${l.id}`}
                        className={`nav-link ${activeSection === l.id ? "active" : ""}`}
                        onClick={() => onLinkClick?.()}
                    >
                        {l.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const navRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const navHeight = navRef.current?.offsetHeight || 0;

        const observerOptions = {
            root: null,
            rootMargin: `-${navHeight}px 0px 0px 0px`, // offset for fixed navbar
            threshold: 0, // trigger as soon as the top of section enters viewport
        };

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        // Observe all sections with id
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        // Cleanup
        return () => observer.disconnect();
    }, []);


    const closeAndBlur = () => {
        setIsOpen(false);
        // optional: blur active element so mobile keyboard or focus is removed
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    };

    return (
        <div ref={navRef} className="fixed inset-x-0 z-200 w-full p-2 backdrop-blur-sm bg-transparent">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <div>
                        <ThemeToggler />
                    </div>

                    <button
                        onClick={() => setIsOpen((v) => !v)}
                        className="flex cursor-pointer text-neutral-400 hover:text-black dark:hover:text-white focus:outline-none sm:hidden"
                        aria-label="toggle menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>

                    <nav className="hidden sm:flex">
                        <Navigation activeSection={activeSection} onLinkClick={closeAndBlur} />
                    </nav>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 0.35 }}
                >
                    <nav className="pb-5">
                        <Navigation activeSection={activeSection} onLinkClick={closeAndBlur} />
                    </nav>
                </motion.div>
            )}
        </div>
    );
}
