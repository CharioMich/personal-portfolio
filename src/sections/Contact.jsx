// import { Vortex } from "@/components/Vortex.jsx";
import Phone from "@/components/Phone.jsx";
import Loader from "@/components/Loader.jsx";

import {Suspense, useEffect, useState} from "react";
import { Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { a, useSpring } from '@react-spring/three';
import {useMediaQuery} from "react-responsive";

import { motion } from "motion/react";
import PhoneCard from "@/components/PhoneCard.jsx";
import {StarsBackground} from "@/components/StarsBackground.jsx";

import {Pointer} from "lucide-react";

const Contact = () => {

    const isDesktop = useMediaQuery({minWidth: 769})

    const [isInside, setIsInside] = useState(false);

    // Define the initial state (which will also be the 'reset' state)
    const initialPosition = isDesktop ? [18, 0, 4] : [0, 0, 0];
    const initialRotation = [0.32, -0.69, 0];

    // Use the useSpring hook to manage the animated properties
    const [springs, api] = useSpring(() => ({
        position: initialPosition,
        rotation: initialRotation,
        config: {
            tension: 170, // Adjust for a bouncier/stiffer effect
            friction: 46   // Adjust for how quickly it slows down
        }
    }));

    // Define the target state for movement
    const targetPosition = [1, -4, 40];
    const targetRotation = [0.9, 0.75, 0];

    useEffect(() => {
        if (isInside) {
            api.start({ position: targetPosition, rotation: targetRotation });
        } else {
            api.start({ position: initialPosition, rotation: initialRotation });
        }
    }, [isInside]);

    const handleMovement = () => setIsInside(true);
    const handleReset = () => setIsInside(false);


    const cardVariants = {
        // This is the state when the card IS visible (isInside is true)
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1,
                duration: 0.7
            }
        },
        // This is the state when the card IS hidden (isInside is false)
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                // DISAPPEAR speed much faster (e.g., 0.2s)
                duration: 0.5
            }
        }
    };

    return (
        <section id="contact" className="c-space relative min-h-screen w-full m-auto section-spacing">
            <h2 className="text-heading">Contact</h2>
            <hr className="border-gray-300 dark:border-gray-500 mt-10" />
            <div className="w-full relative inset-0 h-screen">
                {/*<Vortex*/}
                {/*    backgroundColor="transparent"*/}
                {/*    rangeY={800}*/}
                {/*    particleCount={200}*/}
                {/*    baseHue={120}*/}
                {/*    className="flex flex-col w-full h-full m-auto"*/}
                {/*>*/}
                <StarsBackground/>
                    {/* Outer div */}
                    <div className="flex flex-col items-center h-full justify-between md:flex-row z-30"
                        onMouseLeave={handleReset}
                    >

                        {/* Text */}
                        <div
                            className={`flex flex-col w-full md:flex-row z-30 md:mb-10 items-center justify-around transition-colors duration-1500 ${isInside ? "text-white" : ""}`}
                        >
                            <div className="flex flex-col items-center gap-4 font-bold">
                                {/*<p className="text-2xl dark:text-white font-mono p-2 w-fit">Thank you for coming this far!</p>*/}
                                <div
                                    className="flex flex-col text-2xl font-bold items-center gap-6 w-fit"
                                >
                                    <p>Check out my GitHub profile!</p>
                                    <a
                                        href="https://github.com/CharioMich"
                                        target="_blank">
                                        <img
                                            className="rounded-full shadow-lg shadow-gray-600 hover:transition transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-emerald-600 hover:scale-110"
                                            src="/assets/ghicon.png"
                                            alt="Github Icon"/>
                                    </a>
                                </div>
                                <p>or..</p>
                                <div className="flex flex-col w-fit items-center mb-2 md:gap-4 cursor-pointer hover:transition-all duration-700 ease-in-out
                                hover:text-shadow-lg hover:text-shadow-fuchsia-700/70 hover:scale-105" onClick={handleMovement}>
                                    <h1 className="text-6xl text-center font-extrabold mt-2">Let's get in touch!</h1>
                                    <Pointer size={50} className={`mt-1 animate-pulse transition-all duration-500 ${isInside ? "invisible" : ""}`} />
                                </div>

                            </div>
                            {/*PhoneCard*/}
                            <motion.div
                                initial="hidden"
                                animate={isInside ? "visible" : "hidden"}
                                variants={cardVariants}
                                className={`z-30 max-w-md max-h-md motion-element ${!isInside ? "pointer-events-none" : ""}`}
                            >
                                <PhoneCard/>
                            </motion.div>
                        </div>
                        {/* 3D Model */}
                        <div className="absolute inset-0 z-20 m-auto">
                            <Canvas>
                                <PerspectiveCamera makeDefault position={[0, 0, 50]} />
                                <Suspense fallback={<Loader />}>
                                    <ambientLight intensity={0.5} color={"#00ffcc"} />
                                    <directionalLight position={[5, 10, 5]} intensity={2} color={"#00ffff"} />
                                    <directionalLight position={[-7, -2, 5]} intensity={1} color={"#ff00ff"} />
                                    <a.group position={springs.position} scale={1} rotation={springs.rotation}>
                                        <Center>
                                            <Phone scale={3} position={[0, 0, 0]} rotation={[0, 0, 0]}/>
                                        </Center>
                                    </a.group>
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                {/*</Vortex>*/}
            </div>

        </section>
    )
}

export default Contact;