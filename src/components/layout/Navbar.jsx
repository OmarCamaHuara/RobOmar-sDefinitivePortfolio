export default function Nabbar() {
    return (
        <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
            <div className="text-xl font-bold">Robomar 🚀</div>
            <ul className="flex space-x-4">
                <li><a href="#hero" className="hover:text-teal-400">Home</a></li>
                <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
                <li><a href="#blog" className="hover:text-teal-400">Blog</a></li>
                <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
        </nav>
    );
}       