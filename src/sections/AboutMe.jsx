import React, {Suspense, useRef} from "react";
import { motion } from "motion/react"

// 3D Model Imports
import Robot from "@/components/Robot.jsx"
// import { ContactShadows } from "@react-three/drei";
import {Canvas, useFrame,} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
// import {Float} from "@react-three/drei";

import Loader from "../components/Loader.jsx";
import {useMediaQuery} from "react-responsive";
// import {easing} from "maath";
import EvervaultCard from "../components/EvervaultCard.jsx";
import GridBackground from "@/components/GridBackGround.jsx";
import {AnimatedTooltip} from "@/components/AnimatedToolTip.jsx";

// Tech Stack Icons Lists
import {frontTechStack, backTechStack, otherTechStack} from "@/utils/techIconsLists.js";
import SparklesText from "@/components/SparklesText.jsx";


const AboutMe = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const robotRef = useRef();

    return (
        <>
            <section id="about" className="min-h-screen overflow-hidden c-space section-spacing">
                <h2 className="text-heading">About Me</h2>
                <hr className="border-gray-300 dark:border-gray-500 mt-10" />
                <GridBackground>
                    <div className="flex flex-col md:flex-row mt-10 items-start z-20">
                        <div className="space-y-4 mb-10">
                            <motion.p
                                className="mt-8 text-xl"
                                initial={{opacity: 0, x: -100}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{amount: 0.3}}
                                transition={{duration: 2}}
                            >
                                I am a junior full stack developer focusing on building clean, scalable, and user-friendly applications.
                                I primarily work with React on the frontend and Java Spring Boot on the backend, but I also enjoy exploring
                                new technologies and frameworks to continuously expand my skill set.
                                <p className="animate-pulse mt-3 text-sm">Don't be shy, move the Robot.</p>
                            </motion.p>
                            <motion.h2
                                className="text-3xl mt-12"
                                initial={{opacity: 0, x: -100}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{amount: 0.3}}
                                transition={{duration: 2}}
                            >Tech Stack</motion.h2>
                            {/* Tech Stack */}
                            <div className="flex flex-row md:flex-col align-left mt-10">
                                {/* Frontend */}
                                {!isMobile && (<p>Frontend</p>)}
                                <motion.div
                                    initial={{opacity: 0, x: -100}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{amount: 0.3}}
                                    transition={{duration: 2}}
                                    className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full motion-element">
                                    {isMobile && <p className="mb-2 font-bold">Frontend</p>}
                                    <AnimatedTooltip items={frontTechStack}/>
                                </motion.div>
                                {/* Backend */}
                                {!isMobile && (<p>Backend</p>)}
                                <motion.div
                                    initial={{opacity: 0, x: -100}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{amount: 0.3}}
                                    transition={{duration: 2}}
                                    className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full motion-element">
                                    {isMobile && <p className="mb-2 font-bold">Backend</p>}
                                    <AnimatedTooltip items={backTechStack}/>
                                </motion.div>
                                {/* Other */}
                                {!isMobile && (<p>Other</p>)}
                                <motion.div
                                    initial={{opacity: 0, x: -100}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{amount: 0.3}}
                                    transition={{duration: 2}}
                                    className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full motion-element">
                                    {isMobile && <p className="mb-2 font-bold">Other</p>}
                                    <AnimatedTooltip items={otherTechStack}/>
                                </motion.div>
                            </div>
                        </div>
                        {/* Model */}
                        {!isMobile && (
                            <motion.div
                                className="w-1/2 m-auto"
                                initial={{opacity: 0, x: 400}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{amount: 0.2}}
                                transition={{duration: 2}}
                            >
                                <Canvas camera={{ position: [0, 5, 20], fov: 50 }}>
                                    <Suspense fallback={<Loader />}>
                                        <ambientLight intensity={7} />
                                        <directionalLight position={[10, 0, 100]} intensity={7} />
                                        {/*<directionalLight position={[-10, 10, 5]} intensity={2} />*/}
                                        <OrbitControls
                                            enableZoom={false}
                                            enableDamping={true}
                                            dampingFactor={0.08}    // smooth but not too sluggish
                                            rotateSpeed={0.9}       // slightly reduced sensitivity for Firefox
                                            panSpeed={0.5}          // steady panning
                                            // zoomSpeed={0.7}
                                            // minDistance={2}
                                            // maxDistance={40}
                                        />
                                        <Robot ref={robotRef} />
                                    </Suspense>
                                </Canvas>
                            </motion.div>
                        )}
                    </div>
                </GridBackground>

                <motion.h2
                    className="font-bold mt-10 text-2xl md:text-3xl text-center"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{amount: 1}}
                    transition={{duration: 1.6}}
                >
                    <SparklesText className="text-4xl">My Values</SparklesText>
                </motion.h2>
                {/* Hoverable Values */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-15">
                    {/* Card 1 */}
                    <motion.div
                        className="flex flex-col items-center max-w-90 mx-auto p-4 relative motion-element"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                    >
                        <EvervaultCard
                            text="Fast Learner"
                            size={isMobile ? "sm" : "md"}
                        />
                        <p className="dark:text-white text-black mt-4 text-center font-light"
                        >
                            One cannot just know everything. It is important however, to know how and where to look for answers.
                            Having explored a large variety of technologies, I quickly adapt to new tools, frameworks, and challenges, turning knowledge into results.
                        </p>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div
                        className="flex flex-col items-center max-w-90 mx-auto p-4 relative motion-element"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.1 }}
                    >
                        <EvervaultCard
                            text="Problem Solver"
                            size={isMobile ? "sm" : "md"}
                            colorLeft="oklch(64.5% 0.246 16.439)"
                            colorRight="oklch(60.6% 0.25 292.717)"
                        />
                        <p className="dark:text-white text-black mt-4 text-center font-light"
                        >I believe that for every problem, there is a solution. Approaching obstacles with creativity, logic and an open mind,
                            will always lead us to efficient and practical solutions.
                        </p>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div
                        className="flex flex-col items-center max-w-90 mx-auto p-4 relative motion-element"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.2 }}
                    >
                        <EvervaultCard
                            text="Team Player"
                            size={isMobile ? "sm" : "md"}
                            colorLeft="oklch(89.7% 0.196 126.665)"
                            colorRight="oklch(70.4% 0.14 182.503)"
                        />
                        <p className="dark:text-white text-black mt-4 text-center font-light"
                        >I collaborate openly, welcome feedback, and love contributing to positive, supportive teams. <br/><br/>
                            <i>Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work.</i> <br/> Vince Lombardi
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

// Make model follow mouse movement
// function Rig({ target }) {
//     return useFrame((state, delta) => {
//         if (target.current) {
//             // Smooth rotation based on mouse
//             easing.dampE(
//                 target.current.rotation,
//                 [
//                     -state.mouse.y / 2,   // X rotation
//                     state.mouse.x / 3,  // Y rotation
//                     0                   // Z rotation
//                 ],
//                 0.5,
//                 delta
//             );
//         }
//     });
// }

export default AboutMe;