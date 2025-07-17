import symbol1 from '../images/Symbol.png';
import symbol2 from '../images/Symbol (1).png';
import symbol3 from '../images/Symbol (2).png';
import symbol4 from '../images/Symbol (3).png';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <p className="text-sm md:text-left text-center w-full md:w-auto text-black">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                <div className="my-2 md:my-0">
                    <img src='src\images\Link → logo.svg.png' alt="Logo" className="h-8" />
                </div>
                <div className="flex space-x-4">
                    <img src={symbol1} alt="" />
                    <img src={symbol2} alt="" />
                    <img src={symbol3} alt="" />
                    <img src={symbol4} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
