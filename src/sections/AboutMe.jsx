import {Suspense, useRef} from "react";

import Robot from "../public/models/Robot.jsx"
import { ContactShadows } from "@react-three/drei";

import {Canvas, useFrame,} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Float} from "@react-three/drei";

import Loader from "../components/Loader.jsx";
import {useMediaQuery} from "react-responsive";
import {easing} from "maath";


const AboutMe = () => {

    const isMobile = useMediaQuery({maxWidth: 768});
    const robotRef = useRef();

    return (
        <>
            <section className="flex flex-row min-h-screen overflow-hidden c-space section-spacing">
                <div className="space-y-4">
                    <h2 className="text-heading">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi autem consequatur cumque distinctio dolorem doloremque facilis illum iure labore molestias, nemo nesciunt perferendis possimus qui, sed sint sit tenetur.</p>
                </div>
                <div className="w-1/2">
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