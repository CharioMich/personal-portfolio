import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";
import {Canvas, useFrame} from "@react-three/fiber";
import {Model} from "../components/Model.jsx";
import {Float} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {easing} from "maath";


const Hero = () => {

    const isMobile = useMediaQuery({maxWidth: 768});

    return (
        <section
            className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space"
        >
            <HeroText />
            <ParallaxBackground />
            <figure
                className="absolute inset-0"
                style={{width:'100%', height:'100%'}}
            >
                <Canvas camera={{position: [0, 1, 3]}}>
                    <Float>
                        <ambientLight intensity={2} />
                        <directionalLight position={[10, 10, 5]} intensity={4} />
                        <Model
                            scale={isMobile && 0.5}
                            position={isMobile && [0.7, 0, 0]}
                        />
                    </Float>
                    {/*<OrbitControls />*/}
                    <Rig />
                </Canvas>

            </figure>
        </section>
    )
}

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 3, 1 + state.mouse.y / 3, 3],
            1,
            delta
        );
    });
}

export default Hero;