import {MacbookScroll} from "@/components/MacbookScroll.jsx";
import { useMediaQuery } from "react-responsive";
import {ThreeDCard} from "@/components/ThreeDCard.jsx";
import GitHubLinkComponent from "@/components/GitHubLinkComponent.jsx";
import {motion} from "motion/react";

const Projects = () => {

    const isLaptop = useMediaQuery({ minWidth: 865 });

    return (
        <section id="projects" className="c-space min-h-screen section-spacing">
            <div className="observer-sentinel absolute top-0 w-full h-1" />
            <h2 className="text-heading">Projects</h2>
            <hr className="border-gray-300 dark:border-gray-500 mt-10" />
            {isLaptop && (
                <div>
                    <div className="w-full overflow-hidden">
                        <a href="https://github.com/CharioMich/myReserva-app" target="_blank">
                            <MacbookScroll src="/assets/projects_screenshots/myreserva.png" />
                        </a>
                    </div>
                    <div className="text-center m-auto mb-20 w-[48rem] p-5 bg-gradient-to-b from-reservabg to-red-300 dark:text-navy special-shadow" >
                        <h2 className="text-2xl font-black mb-2 text-gray-200">Project Description</h2>
                        <strong>myReserva</strong> is an application designed to manage appointments and reservations for small businesses.
                        It stands out as my most significant project so far, with a unique architecture that integrates two distinct backend technologies:
                        Node.js and Spring Boot, both exposing RESTful APIs consumed by the frontend. <br/>

                        The frontend is built with React, Vite, and TypeScript, and leverages modern tools such as Zod for validation,
                        Flowbite for UI components, and React Router for navigation. Both the frontend and backend provide robust authentication, data validation,
                        and a clean architecture, ensuring reliability and scalability.
                    </div>
                </div>
            )}

            {/*  More Projects  */}
            <div className="flex flex-row flex-wrap gap-6 items-center justify-center mt-30">
                {!isLaptop && (
                    <motion.div
                        initial={{opacity: 0, y: -100}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{amount: 0.3}}
                        transition={{duration: 2}}
                    >
                        <ThreeDCard
                            imgSrc="/assets/projects_screenshots/myreserva.png"
                            title="myReserva Full-Stack App"
                            description="A full stack application, handling appointments/reservations for small businesses. Works with two completely different backend technologies."
                        >
                            <GitHubLinkComponent
                                url="https://github.com/CharioMich/myReserva-app"
                            />
                        </ThreeDCard>
                    </motion.div>
                )}
                <motion.div
                    initial={{opacity: 0, x: -200}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{amount: 0.3}}
                    transition={{duration: 1}}
                >
                    <ThreeDCard
                        imgSrc="/assets/projects_screenshots/teachersspring.webp"
                        title="School App - Spring Boot API"
                        description="A RESTful api providing CRUD operations for teacher-users with JWT authentication"
                    >
                        <GitHubLinkComponent
                            url="https://github.com/CharioMich/spring-boot-school-app-api"
                        />
                    </ThreeDCard>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 200}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{amount: 0.3}}
                    transition={{duration: 1}}
                >
                    <ThreeDCard
                        imgSrc="/assets/projects_screenshots/node.webp"
                        title="myReserva Node.js API"
                        description="A RESTful Node.js api providing CRUD operations for users with JWT authentication"
                    >
                        <GitHubLinkComponent
                            url="https://github.com/CharioMich/spring-boot-school-app-api"
                        />
                    </ThreeDCard>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{amount: 0.1}}
                    transition={{duration: 1}}
                >
                    <ThreeDCard
                        imgSrc="/assets/projects_screenshots/springreserva.webp"
                        title="Spring Boot API"
                        description="Spring Boot api for myReserva app, providing robust authentication and security."
                    >
                        <GitHubLinkComponent
                            url="https://github.com/CharioMich/my-reserva-spring-api"
                        />
                    </ThreeDCard>
                </motion.div>
            </div>

        </section>
    )
}

export default Projects;