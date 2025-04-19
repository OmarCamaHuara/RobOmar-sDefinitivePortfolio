import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
export default function Home() {
    return (
        <div className="bg-gray-900 text-white">
            <Hero />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </div>
    );
}