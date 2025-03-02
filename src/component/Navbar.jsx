import { useState } from 'react';
import logoimg from "../images/Logo@2x.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navigate = useNavigate()

    const booka = () => {
        navigate("/booka")
    }
    return (
        <nav className="bg-white p-4 lg:px-18 bg-white p-4 lg:px-18 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="flex justify-between items-center mx-auto px-6 max-w-full">
                <div className="text-black text-2xl font-semibold">
                    <img className='w-3xs' src={logoimg} alt="" />
                </div>

                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-red-700" : "text-black"
                            }`
                        }
                    >
                        Home
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-red-700" : "text-black"
                            }`
                        }
                    >
                        About
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>


                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-red-700" : "text-black"
                            }`
                        }
                    >
                        Menu
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/pages"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-red-700" : "text-black"
                            }`
                        }
                    >
                        Pages
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-red-700" : "text-black"
                            }`
                        }
                    >
                        Contact
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <button onClick={() => booka()} className="font-semibold bg-red-600 text-white border-2 border-solid px-3 py-1 rounded-full hover:border-red-700 hover:bg-white hover:text-black transition-all duration-900">Book A Table</button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col items-center space-y-3 pt-4 pb-2`}>
                <NavLink
                    to="/"
                    className="text-black font-semibold pt-1 relative group"
                    activeClassName="text-red-700"
                >
                    Home
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/about"
                    className="text-black font-semibold pt-1 relative group"
                    activeClassName="text-red-700"
                >
                    About
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/menu"
                    className="text-black font-semibold pt-1 relative group"
                    activeClassName="text-red-700"
                >
                    Menu
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/pages"
                    className="text-black font-semibold pt-1 relative group"
                    activeClassName="text-red-700"
                >
                    Pages
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/contact"
                    className="text-black font-semibold pt-1 relative group"
                    activeClassName="text-red-700"
                >
                    Contact
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <button onClick={() => booka()} className="text-black font-semibold text-sm border-2 border-solid px-3 py-1 rounded-full">
                    Book A Table
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
