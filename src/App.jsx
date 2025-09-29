import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import AboutMe from "./sections/AboutMe.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <>
            <div className="container m-auto max-w-7xl">
                <Navbar />
                <Hero />
                <AboutMe />
                <Projects />
                <Contact />
                <Footer/>
            </div>
        </>
    )
}

export default App;