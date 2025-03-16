import Link from "next/link";
const Navbar = () => {
    return (
        <div className="w-full bg-black text-white py-4 shadow">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-20">
                {/* Logo */}
                <div className="text-2xl font-bold">D</div>

                {/* Navigation Links */}
                <ul className="flex space-x-8 text-lg">
                    <li className="relative group">
                        <Link href="/" className="hover:text-cyan-400">Home</Link>
                        <div className="absolute w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    </li>
                    <li className="relative group">
                        <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
                        <div className="absolute w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    </li>
                    <li className="relative group">
                        <Link href="/blog" className="hover:text-cyan-400">Blog</Link>
                        <div className="absolute w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
