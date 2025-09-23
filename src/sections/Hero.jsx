import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";

const Hero = () => {

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
        </section>
    )
}

export default Hero;