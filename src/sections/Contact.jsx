// import { Vortex } from "@/components/Vortex.jsx";
import Phone from "@/components/Phone.jsx";
import Loader from "@/components/Loader.jsx";

import {Suspense, useState} from "react";
import { Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { a, useSpring } from '@react-spring/three';

import { motion } from "motion/react";
import PhoneCard from "@/components/PhoneCard.jsx";
import {StarsBackground} from "@/components/StarsBackground.jsx";


const Contact = () => {

    const [isInside, setIsInside] = useState(false);

    // Define the initial state (which will also be the 'reset' state)
    const initialPosition = [13, 0, 2];
    const initialRotation = [0.3, -0.65, 0];

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


    const handleMovement = () => {
        // Use api.start method to trigger smooth transition
        api.start({
            position: targetPosition,
            rotation: targetRotation
        });

        setIsInside(true);
    }

    const handleReset = () => {
        api.start({
            position: initialPosition,
            rotation: initialRotation
        });

        setIsInside(false);
    }

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
                    <div className="flex flex-col items-center h-full justify-around md:flex-row z-30"
                        onMouseEnter={handleMovement}
                        onMouseLeave={handleReset}
                    >

                        {/* Text */}
                        <div
                            className="flex flex-col w-full md:flex-row z-30 items-center justify-around"
                        >
                            <div className="p-4 light:triple-shadow rounded-xl bg-gray-200/70 text-black dark:text-white dark:bg-transparent">
                                <p className="text-xl dark:text-white font-mono p-2 w-fit">Thank you for coming this far!</p>
                                <h1 className="text-6xl font-extrabold">
                                    Let's get in touch!
                                </h1>
                            </div>
                            {/*PhoneCard*/}
                            <motion.div
                                initial="hidden"
                                animate={isInside ? "visible" : "hidden"}
                                variants={cardVariants}
                                className={`z-30 max-w-md max-h-md motion-element ${!isInside ? "pointer-events-none" : ""}`}
                                onMouseEnter={handleMovement}
                            >
                                <PhoneCard/>
                            </motion.div>
                        </div>
                        {/* 3D Model */}
                        <div className="absolute inset-0 z-20 m-auto" onMouseLeave={handleReset}>
                            <Canvas onMouseLeave={handleReset}>
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