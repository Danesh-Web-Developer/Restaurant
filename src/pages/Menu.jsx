import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useState } from "react";
const array5 = [
    {
        image: "src/images/Mask group (24).png",
        price: "$ 9.99",
        title: "Fried Eggs",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (25).png",
        price: "$ 15.99",
        title: "Hawaiian Pizza",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (31).png",
        price: "$ 7.25",
        title: "Martinez Cocktail",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (26).png",
        price: "$ 20.99",
        title: "Butterscotch Cake",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (27).png",
        price: "$ 5.89",
        title: "Mint Lemonade",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (28).png",
        price: "$ 18.05",
        title: "Chocolate Icecream",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (29).png",
        price: "$ 12.55",
        title: "Cheese Burger",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    },
    {
        image: "src/images/Mask group (30).png",
        price: "$ 12.99",
        title: "Classic Waffles",
        desc: "Made with eggs, lettuce, salt, oil and other ingredients."
    }
];

const array6 = [
    {
        image: "src/images/logo1.png"
    },
];

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];
const Menu = () => {
    const [activeTab, setActiveTab] = useState("All");
    return (
        <>
            <Navbar />
            <div className="p-2 lg:p-15 lg:pt-5 lg:pb-15 container mx-auto pb-15 lg:pt-35 pt-35">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:mb-5 font-semibold">Our Menu</h1>
                <p className="text-center">We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                <div className="flex justify-center space-x-2 mt-6 mb-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full font-semibold border transition-all duration-300 ${activeTab === category ? "bg-red-600 text-white border-red-600" : "border-gray-400 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4">
                    {array5.map((item, index) => (
                        <div key={index} className="bg-white mt-5 lg:mt-2 rounded-lg shadow-md mx-5 lg:mx-0 transition duration-800 transform hover:scale-103">
                            <img
                                src={item.image}
                                alt="Blog Thumbnail"
                                className="w-full h-40 object-cover rounded-lg mb-3"
                            />
                            <p className="text-red-600 text-center text-md font-semibold px-4 pt-3">
                                {item.price}
                            </p>
                            <h3 className="text-lg text-center font-semibold leading-none px-4">{item.title}</h3>
                            <p className="text-center text-md px-4 pt-3 pb-5">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 py-15">
                <div className="container mx-auto lg:px-15">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        <div className="lg:col-span-2 py-10 mx-5 lg:mx-0">
                            <h2 className="text-3xl lg:text-5xl font-bold px-6 pb-4">You can order <br /> through apps</h2>
                            <p className="px-6">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
                            </p>
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 p-0 m-0">
                            {array6.map((item, index) => (
                                <div key={index} className="lg:w-140">
                                    <img src={item.image} alt="" className="h-70" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Menu;