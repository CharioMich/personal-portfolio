import {motion, useScroll, useTransform, useSpring} from "motion/react";
import { useMediaQuery } from "react-responsive";

const ParallaxBackground = () => {

    const {scrollYProgress} = useScroll();
    const scrollSpring = useSpring(scrollYProgress, {damping: 50});

    const isMobile = useMediaQuery({ maxWidth: 800 });

    const buildingX = useTransform(scrollSpring, [0, 0.5], ["0%", "-50%"]);
    const building1Y = useTransform(scrollSpring, [0, 0.3], ["0%", "70%"]);
    const building2Y = useTransform(scrollSpring, [0, 0.7], ["0%", "40%"]);
    const building3Y = useTransform(scrollSpring, [0, 0.2], ["10%", "80%"]);
    //      - scrollYProgress -- building3Y
    //      |       0          -     0%
    //      |       50         -     70%


    return (
        <section className="absolute inset-0 dark:bg-black/40">
            {/* Background */}
            <div className="relative h-screen overflow-y-hidden overflow-x-hidden">
                {/*Background Image by masayuki-koyama*/}
                <div
                    className="absolute inset-0 w-full h-screen -z-50 shadow-md shadow-black"
                    style={{
                        backgroundImage: `url(/assets/masayuki-koyama.jpg)`,
                        backgroundPosition: `bottom`,
                        backgroundSize: `cover`,
                    }}
                />
                {/* Left floating building */}
                <motion.div
                    initial={{opacity: 0.5, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 1, duration: 2}}
                    className="absolute inset-0 w-full h-screen -z-40"
                    style={{
                        backgroundImage: `url(/assets/buildingLeft.png)`,
                        backgroundPosition: `3% 50%`,
                        backgroundSize: isMobile ? '40%' : `18%`,
                        backgroundRepeat: `no-repeat`,
                        x: buildingX
                    }}/>

                {/* Right floating building */}
                <motion.div
                    className="absolute inset-0 w-full h-screen -z-20"
                    style={{
                        backgroundImage: `url(/assets/buildingRight.png)`,
                        backgroundPosition: `65% 42%`,
                        backgroundSize: isMobile ? '0%' : '20%',
                        backgroundRepeat: `no-repeat`,
                        y: building3Y
                    }}/>
                {/* Right popping up buildings */}
                <motion.div
                    className="absolute inset-0 w-full h-screen -z-20"
                    style={{
                        backgroundImage: `url(/assets/buildingWelcome.png)`,
                        backgroundPosition: `105% 100%`,
                        backgroundSize: isMobile? '40%' :`15%`,
                        backgroundRepeat: `no-repeat`,
                        y: building1Y
                    }}/>
                <motion.div
                    className="absolute inset-0 w-full h-screen -z-20"
                    style={{
                        backgroundImage: `url(/assets/building1.png)`,
                        backgroundPosition: `96% 130%`,
                        backgroundSize: isMobile? '40%' :`15%`,
                        backgroundRepeat: `no-repeat`,
                        y: building2Y
                    }}/>
                {/* Fade Overlay */}
                <div className="absolute inset-0 h-screen -z-10
                bg-gradient-to-b
                from-transparent via-transparent to-gray-200
                dark:from-transparent dark:via-transparent dark:via-primary dark:to-midnight" />
            </div>
        </section>
    )
}

export default ParallaxBackground;