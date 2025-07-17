import Navbar from "../component/Navbar";
import Card1 from "../component/Card1";
import Card2 from "../component/Card2";
import { useState } from "react";
import Card3 from "../component/Card3";
import Card4 from "../component/Card4";
import Footer from "../component/Footer";
const array = [
    {
        image: "src/images/Link(5).png",
        title: 'New York',
        desc: '8 Properties'
    },
    {
        image: "src/images/Link (4).png",
        title: 'Chicago',
        desc: '2 Properties'
    },
    {
        image: "src/images/Link (2).png",
        title: 'Los Angeles',
        desc: '1 Property'
    },
    {
        image: "src/images/Link (3).png",
        title: 'Miami',
        desc: '2 Properties'
    },
    {
        image: "src/images/Link(6).png",
        title: 'Florida',
        desc: '3 Properties'
    }
];

const array2 = [
    {
        image: "src/images/Icon.png",
        title: 'Wide Range of Properties',
        desc: 'We offer expert legal help for all related property items in Dubai.'
    },
    {
        image: "src/images/Icon (1).png",
        title: 'Buy or Rent Homes',
        desc: 'We sell your home at the best market price and very quickly as well.'
    },
    {
        image: "src/images/Icon (2).png",
        title: 'Trusted by Thousands',
        desc: 'We offer you free consultancy to get a loan for your new home.'
    },
];
const array3 = [
    {
        image: "src/images/Link(5).png",
        title: 'Luxury Family Home',
        desc: '1800-1818 79th St'
    },
    {
        image: "src/images/Link (4).png",
        title: 'Skyper Pool Apartment',
        desc: '1020 Bloomingdale Ave'
    },
    {
        image: "src/images/Link (2).png",
        title: 'North Dillard Street',
        desc: '4330 Bell Shoals Rd'
    },
    {
        image: "src/images/Link(5).png",
        title: 'Eaton Garth Penthouse',
        desc: '7722 18th Ave, Brooklyn'
    },
    {
        image: "src/images/Link (4).png",
        title: 'New Apartment Nice Wiew',
        desc: '42 Avenue O, Brooklyn'
    },
    {
        image: "src/images/Link (2).png",
        title: 'Diamond Manor Apartment',
        desc: '7802 20th Ave, Brooklyn'
    }
];
const card4 = [
    {
        image: "src/images/Figure → Link → pro3-qlye0115ncgc6to7z6qk3p4919iaumpi172tx8ync4.jpg.png",
        date: "Apartment .  March 19, 2024",
        title: "Housing Markets That Changed the Most This Week",
        buttonText: "Read More",
    },
    {
        image: "src/images/Figure → Link → pro5-qlye0115ncgc6to7z6qk3p4919iaumpi172tx8ync4.jpg.png",
        date: "Apartment .  March 19, 2024",
        title: "Read Unveils the Best Canadian Cities for Biking",
        buttonText: "Read More",
    },
    {
        image: "src/images/Figure → Link → pro4-qlye0115ncgc6to7z6qk3p4919iaumpi172tx8ync4.jpg.png",
        date: "Office .  March 19, 2024",
        title: "10 Walkable Cities Where You Can Live Affordably",
        buttonText: "Read More",
    },
    {
        image: "src/images/Figure → Link → pro1-qlye0115ncgc6to7z6qk3p4919iaumpi172tx8ync4.jpg.png",
        date: "Shop .  March 19, 2024",
        title: "New Apartment Nice in the Best Canadian Cities",
        buttonText: "Read More",
    },
];
const categories = ["All Properties", "Villa", "Apartments", "Office"];
const Home = () => {
    const [activeTab, setActiveTab] = useState("All");
    return (
        <>
            <Navbar />
            <div className="bg-[url('src/images/div.property-item.png')] bg-cover bg-center xs:h-screen sm:h-[90vh] md:h-screen lg:h-screen flex items-center justify-center pb-10 pt-30 lg:pt-35">
                <div className="text-center">
                    <p className="pt-3 lg:pt-6 font-semibold text-white text-sm sm:text-md md:text-md lg:text-md mb-6">5 Beds _ 2 Baths _ 180 _ sqft</p>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white">Office Space at<br />Northwest</h1>
                    <p className="pt-3 lg:pt-6 text-white text-sm sm:text-lg md:text-lg lg:text-lg">$250/month</p>
                    <div>
                        <button className="mx-1 font-semibold bg-yellow-300 text-black text-sm lg:mt-2 px-1 py-1 rounded-md sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-2 lg:text-lg text-black flex justify-between items-center mx-22"><p>View Details</p> <img className="w-5 ps-1 pt-1" src="src\images\SVG.png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto text-center p-4 lg:p-16 mt-5 max-w-7xl">
                <h1 className="text-4xl font-bold mb-3">Find Properties in These Cities</h1>
                <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
                    {array.map((item, index) => (
                        <Card1 key={index} image={item.image} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>

            <div className="container mx-auto text-center p-6 pb-7 lg:px-16 lg:py-16 max-w-7xl">
                <h1 className="text-4xl">Why You Should Work With Us</h1>
                <p className='mb-3 lg:mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                    {array2.map((item, index) => (
                        <Card2 key={index} image={item.image} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
            <div className="container mx-auto lg:px-15 max-w-6xl flex flex-col lg:flex-row justify-between items-center bg-gray-800 w-full lg:p-13 p-6 rounded-lg text-center lg:text-left">
                <div className="mb-4 lg:mb-0">
                    <h1 className="text-lg lg:text-2xl text-white font-semibold">Sign in to streamline your search</h1>
                    <p className="text-white text-sm lg:text-base">Save properties, create alerts and keep track of the enquiries you send to agents.</p>
                </div>
                <div>
                    <button className="font-semibold bg-yellow-300 text-black text-sm rounded-md py-2 px-4 lg:py-2 lg:px-5 lg:text-lg flex items-center">
                        <p className="me-1">Sign in or create an account</p>
                        <img className="w-4 pt-1" src="src/images/SVG.png" alt="" />
                    </button>
                </div>
            </div>

            <div className="container mx-auto text-center p-3 pt-6 mt-5 lg:py-20 lg:px-15">
                <h1 className="text-4xl">Featured Properties</h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-wrap justify-center  gap-3 mt-4 mb-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-2 py-2 lg:mb-5 lg:px-4 rounded-full font-semibold border transition-all duration-300 text-sm sm:text-base ${activeTab === category
                                ? "bg-red-600 text-white border-red-600"
                                : "border-gray-400 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
                    {array3.map((item, index) => (
                        <Card3 key={index} image={item.image} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
            <div className="relative flex items-center justify-center h-65 mt-5 lg:h-full">
                <img className="w-full h-full object-cover" src="src/images/div.elementor-element (1).png" alt="" />
                <div className="absolute flex flex-col items-center justify-center text-center text-white space-y-4">
                    <h1 className="text-3xl lg:text-5xl font-semibold">Discover a place you'll <br /> love to live</h1>
                    <p className="lg:text-lg max-w-lg">
                        Pellentesque egestas elementum egestas faucibus sem. Velit nunc<br />egestas ut morbi. Leo diam diam
                    </p>
                    <button className="mx-1 font-semibold bg-yellow-300 text-black text-sm lg:mt-2 px-1 py-1 rounded-md sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-2 lg:text-lg text-black flex justify-between items-center mx-22"><p>View Properties</p> <img className="w-5 ps-1 pt-1" src="src\images\SVG.png" alt="" /></button>
                </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap max-w-7xl lg:px-10 mx-auto overflow-hidden lg:py-20 py-5">
                <div className="lg:w-2/3 w-full p-6 space-y-6">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                        We Use Real Estate to Show<br />Our Appreciation of The<br />World
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi.
                        Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-4">
                            <h2 className="text-3xl font-semibold">$18M</h2>
                            <p>Owned from properties<br />transactions</p>
                        </div>
                        <div className="p-4">
                            <h1 className="text-3xl font-semibold">15K+</h1>
                            <p>Properties for<br />Sell</p>
                        </div>
                        <div className="p-4">
                            <h1 className="text-3xl font-semibold">26K+</h1>
                            <p>Properties for<br />Buy</p>
                        </div>
                        <div className="p-4">
                            <h1 className="text-3xl font-semibold">890</h1>
                            <p>Daily completed<br />transactions.</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 font-semibold bg-yellow-300 text-black lg:text-lg px-3 py-1 lg:px-5 lg:py-2 rounded-md">
                        <p>View Details</p>
                        <img className="lg:w-5" src="src/images/SVG.png" alt="" />
                    </button>
                </div>

                <div className="w-full lg:w-1/3 px-4">
                    <img
                        src="src\images\Link → h72.jpg.png"
                        alt="Real Estate"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
            <div className="bg-black py-10 flex items-center justify-center mt-5">
                <div className="container mx-auto px-6 lg:px-15 lg:h-70 text-white flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold">What our customers are<br /> saying about us?</h2>
                        <div className="flex items-center justify-center md:justify-start space-x-6 mt-4">
                            <div>
                                <h2 className="text-3xl font-semibold">10m+</h2>
                                <p className='text-sm mb-3'>Happy People</p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-semibold">4.88</h2>
                                <p className='text-sm'>Overall rating</p>
                                <img src="src\images\stars.png.png" alt="Rating stars" className="w-24 mt-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2   p-6 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-4">
                            <img className="w-14 h-14 rounded-full" src="src\images\test1.png.png" alt="Cameron Williamson" />
                            <div>
                                <h2 className="text-lg font-semibold">Cameron Williamson</h2>
                                <p className='text-sm text-gray-400'>Designer</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm md:text-base text-gray-300 leading-relaxed">
                            Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores."
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black h-[120px] flex flex-col pb-20 justify-center text-center">
                <p className="text-white text-lg px-4">
                    Thousands of the world’s leading companies trust Space
                </p>
                <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-3 lg:gap-6 mt-3">
                    <img className="h-6 max-w-full" src="src\images\Link → bw-1.png.png" alt="Company 1" />
                    <img className="h-6 max-w-full" src="src\images\Link → bw-2.png.png" alt="Company 2" />
                    <img className="h-6 max-w-full" src="src\images\Link → bw-3.png.png" alt="Company 3" />
                    <img className="h-6 max-w-full" src="src\images\Link → bw-4.png.png" alt="Company 4" />
                    <img className="h-6 max-w-full" src="src\images\Link → bw-5.png.png" alt="Company 5" />
                    <img className="h-6 max-w-full" src="src\images\Link → bw-6.png.png" alt="Company 6" />
                </div>
            </div>

            <div className="mx-auto lg:px-20 text-center mt-15">
                <h2 className="text-3xl lg:text-4xl font-semibold">Recent Articles & News</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4">
                    {card4.map((card, index) => (
                        <Card4 key={index} {...card} />
                    ))}
                </div>
            </div>

            <div className="lg:py-20 py-10 flex items-center justify-center lg:mt-5">
                <div className="container mx-auto px-6 lg:px-15 lg:h-70 text-white flex flex-col md:flex-row items-center justify-between">
                    <div className="lg:w-260 w-90 text-center md:text-left bg-gray-400 lg:h-90 h-75 lg:rounded-tl-lg lg:rounded-bl-lg flex flex-col lg:ps-20 justify-center">
                        <h2 className="text-3xl font-semibold">Download the App</h2>
                        <p className='p-4 pt-0'>Take classes on the go with the just home app. Stream or download<br />
                            to watch on the plane, the subway, or wherever you learn best.
                        </p>
                        <div className="flex mt-5 mx-9 lg:mx-0 space-x-2">
                            <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
                                <img src="src\images\SVG1.png" alt="icon" className="w-5 h-5" />
                                <span className='text-sm font-semibold'><p className='text-xs'>Download on the</p>Apple Store</span>
                            </button>
                            <button className="border px-3 py-2 rounded-lg flex items-center gap-2">
                                <img src="src\images\Vector.png" alt="icon" className="w-5 h-5" />
                                <span className='text-sm font-semibold'><p className='text-xs'>Get in on</p>Google Play</span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-150 h-90">
                        <div className="flex items-center space-x-4">
                            <img className="h-90 lg:w-160" src="src\images\Link → h73.jpg.png" alt="Cameron Williamson" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-15 text-center flex flex-col items-center space-y-4 mt-5">
                <img src="src\images\mail2.svg fill.png" alt="Newsletter Icon" className="mx-auto w-15 h-15" />
                <h2 className="text-3xl font-semibold">Stay Up to Date</h2>
                <p>Subscribe to our newsletter to receive our weekly feed.</p>
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="border border-gray-400 rounded-full px-4 py-2 w-80"
                />
            </div>
            <Footer />
        </>
    );
};
export default Home;