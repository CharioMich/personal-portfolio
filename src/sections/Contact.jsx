import { Vortex } from "@/components/Vortex.jsx";
import Phone from "@/public/models/phone/Phone.jsx";
import { Suspense } from "react";
import Loader from "@/components/Loader.jsx";
import { Center, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { a, useSpring } from '@react-spring/three';

const Contact = () => {

    // Define the initial state (which will also be the 'reset' state)
    const initialPosition = [0, 0, 0];
    const initialRotation = [0.3, -0.45, 0];

    // Use the useSpring hook to manage the animated properties
    const [springs, api] = useSpring(() => ({
        position: initialPosition,
        rotation: initialRotation,
        config: {
            tension: 70, // Adjust for a bouncier/stiffer effect
            friction: 50   // Adjust for how quickly it slows down
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
    }

    const handleReset = () => {
        api.start({
            position: initialPosition,
            rotation: initialRotation
        });
    }

    return (
        <section id="contact" className="c-space min-h-screen section-spacing">
            <h2 className="text-heading">Contact</h2>
            <button onClick={handleMovement}>Move</button>
            <button onClick={handleReset}>Reset</button>
            <hr className="border-gray-300 dark:border-gray-500 mt-10" />
            <div className="w-full relative inset-0 h-screen">
                <Vortex
                    backgroundColor="transparent"
                    rangeY={800}
                    particleCount={200}
                    baseHue={120}
                    className="flex flex-col px-2 md:px-10  py-4 w-full h-full"
                >
                    <div className="flex flex-col md:flex-row mt-10 justify-between">
                        {/*<div className="z-40">*/}
                        {/*    <h1 className="text-5xl font-bold z-40">Let's get in touch!</h1>*/}
                        {/*</div>*/}
                        <div className="relative inset-0 flex flex-col items-center justify-start pt-16 md:pt-24 pointer-events-none z-40">
                            {/* Re-enable pointer events for clickable elements */}
                            <div className="pointer-events-auto text-center max-w-2xl mx-auto p-4 bg-black/30 rounded-xl backdrop-blur-sm">
                                <h1 className="text-6xl font-extrabold text-white mb-6 animate-pulse">
                                    Let's get in touch!
                                </h1>

                                <h2 className="text-3xl text-gray-300 mb-8">
                                    Connect with the 3D world.
                                </h2>

                                <a
                                    href="mailto:example@domain.com"
                                    className="inline-block px-8 py-3 rounded-full text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
                                >
                                    Email Us Now
                                </a>
                            </div>
                        </div>
                        {/* 3D Model */}
                        <div className="absolute inset-0 z-20">
                            <Canvas>
                                <PerspectiveCamera makeDefault position={[0, 0, 50]} />
                                <Suspense fallback={<Loader />}>
                                    <ambientLight intensity={0.2} color={"#00ffcc"} />
                                    <directionalLight position={[5, 10, 5]} intensity={2} color={"#00ffff"} />
                                    <directionalLight position={[-5, -2, 5]} intensity={1} color={"#ff00ff"} />
                                    <a.group position={springs.position} scale={1} rotation={springs.rotation}>
                                        <Center>
                                            <Phone scale={3} position={[0, 0, 0]} rotation={[0, 0, 0]}/>
                                        </Center>
                                    </a.group>
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>

                </Vortex>
            </div>

        </section>
    )
}

export default Contact;