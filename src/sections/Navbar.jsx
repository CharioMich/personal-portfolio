import { Menu, X} from "lucide-react";
import {motion} from "motion/react"
import {useState} from "react";
import {ThemeToggler} from "../components/ThemeToggler.jsx";


function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="" className="nav-link">Home</a>
            </li>
            <a href="" className="nav-link">About</a>

            <li className="nav-li">
                <a href="" className="nav-link">Projects</a>
            </li>
            <li className="nav-li">
                <a href="" className="nav-link">Contact</a>
            </li>
        </ul>
    );
}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-x-0 z-20 w-full p-2 backdrop-blur-sm bg-transparent">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <div>
                        <ThemeToggler />
                        {/*<a*/}
                        {/*    href="/"*/}
                        {/*    className="text-xl ml-4 font-bold transition-colors text-neutral-400 hover:text-white"*/}
                        {/*>Babis</a>*/}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        {isOpen
                            ? <X />
                            : <Menu />
                        }
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    style={{maxHeight: '100vh'}}
                    transition={{duration: 1}}
                >
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    )
}

export default Navbar;