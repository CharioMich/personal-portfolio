import {FlipWords} from "./FlipWords.jsx";
import {motion} from "motion/react";
import {delay} from "motion";

const HeroText = () => {

    const words = ["Secure", "Modern", "Scalable"];

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*    DeskTop View    */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1
                initial={{opacity: 0, x: -50}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: 1, duration: 2}}className="text-5xl font-medium">Hi I'm Charalampos</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1, duration: 2}}
                    className="text-4xl font-medium text-neutral-300">A full-stack developer, </motion.p>
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.3, duration: 2}}
                >
                    <p className="text-3xl font-medium text-neutral-300">creating</p>
                    <FlipWords
                        words={words}
                        className="font-black text-white text-8xl"
                    />
                </motion.div>
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1.5, duration: 2}}
                    className="text-4xl font-medium text-neutral-300"
                >Web Solutions</motion.p>
            </div>
        </div>
        {/*    Mobile View     */}
        <div className="flex flex-col space-6 md:hidden">
            <motion.p
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1, duration: 2}}
                className="text-4xl font-medium">Hi, I'm Charalampos</motion.p>
            <div>
                <p className="text-4xl font-black text-neutral-300">Building</p>
                <div>
                    <FlipWords
                        words={words}
                        className="font-black text-white text-6xl"/>
                    <p className="text-4xl font-black text-neutral-300">Web Applications</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroText;