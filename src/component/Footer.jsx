import logoimg from "../images/Logo.png";
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold"><img className='w-3xs text-white' src={logoimg} alt="" /></h2>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Pages</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Resources</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">Gallery</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="src\images\Mask group (4).png" alt="Gallery Image 1" className="rounded-lg" />
                                <img src="src\images\eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png" alt="Gallery Image 2" className="rounded-lg" />
                                <img src="src\images\Mask group (5).png" alt="Gallery Image 3" className="rounded-lg" />
                                <img src="src\images\Mask group (6).png" alt="Gallery Image 4" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;