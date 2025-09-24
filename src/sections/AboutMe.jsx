import {Suspense, useRef} from "react";

import Robot from "../public/models/Robot.jsx"
import { ContactShadows } from "@react-three/drei";

import {Canvas, useFrame,} from "@react-three/fiber";
// import {OrbitControls} from "@react-three/drei";
import {Float} from "@react-three/drei";

import Loader from "../components/Loader.jsx";
import {useMediaQuery} from "react-responsive";
import {easing} from "maath";
import EvervaultCard from "../components/EvervaultCard.jsx";


const AboutMe = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const robotRef = useRef();

    return (
        <>
            <section className="min-h-screen overflow-hidden c-space section-spacing">
                <div className="flex flex-col md:flex-row ">
                    <div className="space-y-4 mb-10">
                        <h2 className="text-heading">About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem consequatur cumque distinctio dolorem doloremque facilis illum iure labore molestias, nemo nesciunt perferendis possimus qui, sed sint sit tenetur.</p>
                    </div>
                    {/* Model */}
                    <div className="w-1/2 m-auto">
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
                    </div>
                </div>

                <h2 className="font-bold text-2xl md:text-3xl text-center">My Values</h2>
                {/* Hoverable Cards */}
                <div className="flex flex-wrap gap-4 mt-20">
                    {/* Card 1 */}
                    {/* <div className="border rounded-3xl border-black/[0.2] dark:border-white/[0.2] w-49 md:w-65 mx-auto p-4 relative"> */}
                    <div className=" w-49 md:w-65 mx-auto p-4 relative">
                        <EvervaultCard
                            text="Fast Learner"
                            size={isMobile ? "sm" : "md"}
                        />
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </div>
                    {/* Card 2 */}
                    <div className="w-49 md:w-65 mx-auto p-4 relative">
                        <EvervaultCard
                            text="Problem Solver"
                            size={isMobile ? "sm" : "md"}
                            colorLeft="oklch(64.5% 0.246 16.439)"
                            colorRight="oklch(60.6% 0.25 292.717)"
                        />
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </div>
                    {/* Card 3 */}
                    <div className="w-49 md:w-65 mx-auto p-4 relative">
                        <EvervaultCard
                            text="Team Player"
                            size={isMobile ? "sm" : "md"}
                            colorLeft="oklch(89.7% 0.196 126.665)"
                            colorRight="oklch(70.4% 0.14 182.503)"
                        />
                        <p className="dark:text-white text-black mt-4 text-center text-sm font-light">Teams plawsif shdbvi sidf  iushfi  uhfuio h u u ouh </p>
                    </div>
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