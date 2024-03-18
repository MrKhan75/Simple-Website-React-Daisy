const Nav = () => {
    return (
        <div>
            <div className="container mx-auto px-10">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">ReactRouter</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 mt-2">
                            <li><a className="text-base font-semibold text-gray-600 hover:text-purple-500 hover:font-bold">Home</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-purple-500 hover:font-bold">About</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-purple-500 hover:font-bold">Services</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-purple-500 hover:font-bold">Blog</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-purple-500 hover:font-bold">Contact</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Signup</a>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Nav;