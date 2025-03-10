const Navbar = () => {
    return (
        <div className="w-full bg-black shadow text-white pt-3 pb-3">
            <nav className="max-w-6xl mx-auto flex items-center">
                <ul className="flex space-x-6">
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
