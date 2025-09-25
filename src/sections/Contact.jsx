import {SparklesCore} from "@/components/SparklesCore.jsx";
import {Vortex} from "@/components/Vortex.jsx";

const Contact = () => {
    return (
        <section id="contact" className="c-space min-h-screen section-spacing">
            <h2 className="text-heading">Contact</h2>
            <hr className="border-gray-300 dark:border-gray-500 mt-10" />
            <div className="w-full relative inset-0 h-screen">
                {/*<SparklesCore*/}
                {/*    className="w-full h-full"*/}
                {/*    background={"dark:#030412"}*/}
                {/*    minSize={1}*/}
                {/*    maxSize={2}*/}
                {/*    particleDensity={10}*/}
                {/*    particleColor="#A3A3A3"*/}
                {/*/>*/}
                <Vortex
                    backgroundColor="transparent"
                    rangeY={800}
                    particleCount={200}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >

                </Vortex>
            </div>

        </section>
    )
}

export default Contact;