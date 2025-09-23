import {MacbookScroll} from "@/components/MacbookScroll.jsx";

const Projects = () => {
    return (
        <section className="c-space min-h-screen section-spacing">
            <h2 className="text-heading">Projects</h2>
            <hr className="border-gray-300 dark:border-gray-500 mt-10" />
            <div className="w-full overflow-hidden">
                <a href="https://github.com/CharioMich/myReserva-app" target="_blank">
                    <MacbookScroll src="src/public/assets/projects_screenshots/myreserva.png" />
                </a>
            </div>
            <div className="text-center m-auto w-[48rem] p-5 bg-gradient-to-b from-reservabg to-red-300 dark:text-navy special-shadow" >
                <h2 className="text-2xl font-black mb-2 text-gray-200">Project Description</h2>
                "myReserva" is a useful app that handles appointments and reservations for small businesses. It is
                my greatest project so far. Its highlight; It works with two completely different backend technologies.
                A Node.js and a Spring Boot; both exposing a RESTful API that the frontend calls. The frontend
                was implemented using React + Vite + TypeScript as well as a variety of other technologies such as zod
                validation, Flowbite components, React Router and more.
            </div>

        </section>
    )
}

export default Projects;