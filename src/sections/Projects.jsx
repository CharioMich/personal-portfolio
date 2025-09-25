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
                            <MacbookScroll src="src/public/assets/projects_screenshots/myreserva.png" />
                        </a>
                    </div>
                    <div className="text-center m-auto mb-20 w-[48rem] p-5 bg-gradient-to-b from-reservabg to-red-300 dark:text-navy special-shadow" >
                        <h2 className="text-2xl font-black mb-2 text-gray-200">Project Description</h2>
                        "myReserva" is a useful app that handles appointments and reservations for small businesses. It is
                        my greatest project so far. Its highlight; It works with two completely different backend technologies.
                        A Node.js and a Spring Boot; both exposing a RESTful API that the frontend makes calls to. The frontend
                        was implemented using React + Vite + TypeScript as well as a variety of other technologies such as zod
                        validation, Flowbite components, React Router and more. Both frontend and backend provide robust authentication
                        handling, validation and clean architecture.

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
                            imgSrc="src/public/assets/projects_screenshots/myreserva.png"
                            title="School App - Spring Boot API"
                            description="A RESTful api providing CRUD operations for teacher-users with JWT authentication"
                        >
                            <GitHubLinkComponent
                                url="https://github.com/CharioMich/spring-boot-school-app-api"
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
                        imgSrc="src/public/assets/projects_screenshots/teachersspring.webp"
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
                        imgSrc="src/public/assets/projects_screenshots/node.webp"
                        title="myReserva Node.js API"
                        description="A RESTful Node.js api providing CRUD operations for users with JWT authentication"
                    >
                        <GitHubLinkComponent
                            url="https://github.com/CharioMich/spring-boot-school-app-api"
                        />
                    </ThreeDCard>
                </motion.div>
            </div>

        </section>
    )
}

export default Projects;