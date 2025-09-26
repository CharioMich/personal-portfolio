import {Suspense, useRef} from "react";
import { motion } from "motion/react"

// 3D Model Imports
import Robot from "../public/models/Robot.jsx"
import { ContactShadows } from "@react-three/drei";
import {Canvas, useFrame,} from "@react-three/fiber";
// import {OrbitControls} from "@react-three/drei";
import {Float} from "@react-three/drei";

import Loader from "../components/Loader.jsx";
import {useMediaQuery} from "react-responsive";
import {easing} from "maath";
import EvervaultCard from "../components/EvervaultCard.jsx";
import GridBackground from "@/components/GridBackGround.jsx";
import {AnimatedTooltip} from "@/components/AnimatedToolTip.jsx";


const AboutMe = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const robotRef = useRef();

    const techStack = [
        {
            id: 1,
            name: "Jon Doe",
            designation: "Software Engineer",
            image: "https://skillicons.dev/icons?i=java&theme=light",
        },
        {
            id: 2,
            name: "Robert Johnso",
            designation: "Product Manager",
            image: "https://skillicons.dev/icons?i=nodejs&theme=light",
        },
        {
            id: 3,
            name: "John Doe",
            designation: "Software Engineer",
            image: "https://skillicons.dev/icons?i=java&theme=light",
        },
        {
            id: 4,
            name: "Robert Johnson",
            designation: "Product Manager",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
            id: 5,
            name: "John Do",
            designation: "Software Engineer",
            // image: "https://skillicons.dev/icons?i=java&theme=light",
        },
        {
            id: 6,
            name: "Robert Johnsn",
            designation: "Product Manager",
            // image: "https://skillicons.dev/icons?i=nodejs&theme=light",
        },
    ];

    return (
        <>
            <section id="about" className="min-h-screen overflow-hidden c-space section-spacing">
                <h2 className="text-heading">About Me</h2>
                <hr className="border-gray-300 dark:border-gray-500 mt-10" />
                <GridBackground>
                    <div className="flex flex-col md:flex-row items-start z-20">
                        <motion.div
                            className="space-y-4 mb-10"
                            initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{amount: 0.3}}
                            transition={{duration: 2}}
                        >

                            <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem consequatur cumque distinctio dolorem doloremque facilis illum iure labore molestias, nemo nesciunt perferendis possimus qui, sed sint sit tenetur.</p>
                            <h2 className="text-3xl mt-15">Tech Stack</h2>
                            {/* Tech Stack */}
                            <div className="flex flex-row md:flex-col align-left mt-10">
                                {/* Frontend */}
                                <p>Frontend</p>
                                <div className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full">
                                    <AnimatedTooltip items={techStack}/>
                                </div>
                                {/* Backend */}
                                <p>Backend</p>
                                <div className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full">
                                    <AnimatedTooltip items={techStack}/>
                                </div>
                                {/* Other */}
                                <p>Other</p>
                                <div className="flex flex-col md:flex-row items-center justify-start mb-10 mt-3 w-full">
                                    <AnimatedTooltip items={techStack}/>
                                </div>
                            </div>

                        </motion.div>
                        {/* Model */}
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
                                    <directionalLight position={[0, 10, 5]} intensity={7} />
                                    <directionalLight position={[-10, 10, 5]} intensity={2} />
                                    {/*<OrbitControls enableZoom={false}/>*/}
                                    <Float
                                        speed={3}
                                        rotationIntensity={1}
                                        floatIntensity={2}
                                    >
                                        <Robot ref={robotRef} />
                                        <Rig target={robotRef} />
                                    </Float>
                                    {/* Background shadow under robot */}
                                    <ContactShadows
                                        position={[0, -5, 0]}
                                        opacity={1.2}
                                        scale={70}
                                        blur={0.5}
                                        far={30}
                                    />
                                </Suspense>
                            </Canvas>
                        </motion.div>
                    </div>
                </GridBackground>


                <motion.h2
                    className="font-bold mt-4 text-2xl md:text-3xl text-center"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{amount: 1}}
                    transition={{duration: 1.4}}
                >
                    My Values
                </motion.h2>
                {/* Hoverable Values */}
                <div className="flex flex-wrap gap-4 mt-20">
                    {/* Card 1 */}
                    <motion.div
                        className=" w-49 md:w-65 mx-auto p-4 relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 1 }}
                    >
                        <EvervaultCard
                            text="Fast Learner"
                            size={isMobile ? "sm" : "md"}
                        />
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div
                        className=" w-49 md:w-65 mx-auto p-4 relative"
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
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </motion.div>
                    {/* Card 3 */}
                <motion.div
                    className=" w-49 md:w-65 mx-auto p-4 relative"
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
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </motion.div>
                </div>



            </section>
        </>
    )
}

function Rig({ target }) {
    return useFrame((state, delta) => {
        if (target.current) {
            // Smooth rotation based on mouse
            easing.dampE(
                target.current.rotation,
                [
                    -state.mouse.y / 2,   // X rotation
                    -state.mouse.x / 2,  // Y rotation
                    0                   // Z rotation
                ],
                0.5,
                delta
            );
        }
    });
}

export default AboutMe;