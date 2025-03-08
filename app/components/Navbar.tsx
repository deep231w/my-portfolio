const Navbar = ()=>{
    return (
        <>
        <nav className="border-b text-red flex justify-end">
            <ul className="flex space-x-6 pt-2 pb-2 pl-30">
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/blog">blog</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;