import { useState, useEffect } from 'react';
import logoimg from "../images/logo-white.svg.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 p-4 lg:px-18 transition-all duration-300  ${isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"}`}>
            <div className="flex justify-between items-center mx-auto px-6 max-w-full">
                <div className="text-white text-2xl font-semibold">
                    <img className='w-1xs' src={logoimg} alt="logo" />
                </div>

                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-white" : "text-white"
                            }`
                        }
                    >
                        Home
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-white" : "text-white"
                            }`
                        }
                    >
                        About
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>


                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-white" : "text-white"
                            }`
                        }
                    >
                        Menu
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/pages"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-white" : "text-white"
                            }`
                        }
                    >
                        Pages
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `font-semibold pt-1 relative group ${isActive ? "text-white" : "text-white"
                            }`
                        }
                    >
                        Contact
                        <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                    <div className='flex justify-between items-center'>
                        <img className='w-4 me-1' src="src\images\Link.png" alt="" />
                        <p className='text-md text-white'>+68 888 333</p>
                        <img className='w-7 ms-2' src="src\images\Link (1).png" alt="" />
                    </div>
                    <button className="font-semibold text-white border-1 border-solid px-3 py-1 rounded-full transition-all duration-900">Add Property</button>
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} flex flex-col items-center space-y-3 pt-4 pb-2`}>
                <NavLink
                    to="/"
                    className="text-white font-semibold pt-1 relative group"
                    activeClassName="text-white"
                >
                    Home
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/about"
                    className="text-white font-semibold pt-1 relative group"
                    activeClassName="text-white"
                >
                    About
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/menu"
                    className="text-white font-semibold pt-1 relative group"
                    activeClassName="text-white"
                >
                    Menu
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/pages"
                    className="text-white font-semibold pt-1 relative group"
                    activeClassName="text-white"
                >
                    Pages
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <NavLink
                    to="/contact"
                    className="text-white font-semibold pt-1 relative group"
                    activeClassName="text-white"
                >
                    Contact
                    <span className="absolute left-0 bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
                <div className='flex justify-between items-center'>
                    <img className='w-4 me-1' src="src\images\Link.png" alt="" />
                    <p className='text-md text-white'>+68 888 333</p>
                    <img className='w-7 ms-2' src="src\images\Link (1).png" alt="" />
                </div>
                <button className="text-white font-semibold text-sm border-2 border-solid px-3 py-1 rounded-full">
                    Add Property
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
