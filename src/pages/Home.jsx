import Card from "../component/Card";
import Card2 from "../component/Card2";
import Card3 from "../component/Card3";
import Card4 from "../component/Card4";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const array = [
    {
        image: "src/images/icon.png",
        title: "Breakfast",
        desc: "In the new era of technology we look in the future with certainty and pride for our life.",
        btn: "Explore Menu"
    },
    {
        image: "src/images/icon (2).png",
        title: "Main Dishes",
        desc: "In the new era of technology we look in the future with certainty and pride for our life.",
        btn: "Explore Menu"
    },
    {
        image: "src/images/icon (3).png",
        title: "Drinks",
        desc: "In the new era of technology we look in the future with certainty and pride for our life.",
        btn: "Explore Menu"
    },
    {
        image: "src/images/icon (1).png",
        title: "Desserts",
        desc: "In the new era of technology we look in the future with certainty and pride for our life.",
        btn: "Explore Menu"
    }
];

const array2 = [
    {
        image: "src/images/kebab-set-table 1.png",
        title: "Caterings",
        desc: "In the new era of technology we look in the future with certainty for life."
    },
    {
        image: "src/images/Mask group (1).png",
        title: "Birthdays",
        desc: "In the new era of technology we look in the future with certainty for life."
    },
    {
        image: "src/images/Mask group (2).png",
        title: "Weddings",
        desc: "In the new era of technology we look in the future with certainty for life."
    },
    {
        image: "src/images/Mask group (3).png",
        title: "Events",
        desc: "In the new era of technology we look in the future with certainty for life."
    }
];
const array3 = [
    {
        image: "src/images/img.png",
        title: "We provide healthy food for your family.",
        desc1: "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
        desc2: "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
    }
];
const array4 = [
    {
        title: "“The best restaurant”",
        desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles beautifully recommended.",
        image: "src/images/Ellipse 19.png",
        name: 'Sophire Robson'
    },
    {
        title: "“Simply delicious”",
        desc: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
        image: "src/images/Image.png",
        name: 'Matt Cannon'
    },
    {
        title: "“One of a kind restaurant”",
        desc: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
        image: "src/images/Image (1).png",
        name: 'Andy Smith'
    },

];
const array5 = [
    {
        image: "src/images/Mask group (8).png",
        date: "January 3, 2023",
        title: "How to prepare the perfect french fries in an air fryer"
    },
    {
        image: "src/images/Mask group (9).png",
        date: "January 3, 2023",
        title: "How to prepare delicious chicken tenders"
    },
    {
        image: "src/images/Mask group (10).png",
        date: "January 3, 2023",
        title: "7 delicious cheesecake recipes you can prepare"
    },
    {
        image: "src/images/Mask group (11).png",
        date: "January 3, 2023",
        title: "5 great pizza restaurants you should visit this city"
    }
];
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[url('/src/images/46242c265ee4fe6a7935e17a54331b22.png')] bg-cover bg-center xs:h-screen sm:h-[90vh] md:h-screen lg:h-screen flex items-center justify-center pt-35 lg:pt-35">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Best food for <br /> your taste</h1>
                    <p className="pt-3 lg:pt-6 text-sm sm:text-lg md:text-xl lg:text-2xl">Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>

                    <div>
                        <button className="mx-1 font-semibold text-black border-2 border-solid text-sm px-1 py-1 rounded-full sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-1 lg:text-lg hover:bg-red-700 hover:border-red-700 transition-all duration-900 bg-red-600 text-white hover:border-red-700 hover:bg-white hover:text-black">Book A Table</button>
                        <button className="my-4 font-semibold text-black border-2 border-solid text-sm px-1 py-1 rounded-full sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-5 lg:py-1 lg:text-lg hover:bg-red-700 hover:border-red-700 transition-all duration-900 bg-red-600 text-white hover:border-red-700 hover:bg-white hover:text-black">Explore Menu</button>
                    </div>
                </div>
            </div>
            <div className="p-2 pt-5 lg:p-15 lg:pb-15 container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center lg:mb-5 font-semibold">Browse Our Menu</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 lg:p-4">
                    {array.map((item, index) => (
                        <Card key={index} image={item.image} title={item.title} desc={item.desc} btn={item.btn} />
                    ))}
                </div>
            </div>
            <div className="p-2 pt-5 lg:p-15 lg:pb-15 bg-gray-100">
                {
                    array3.map((item, index) => (
                        <Card2 key={index} image={item.image} title={item.title} desc1={item.desc1} desc2={item.desc2} />
                    ))
                }
            </div>
            <div className="p-2 pt-5 lg:p-15 lg:pb-15 container mx-auto">
                <h1 className="lg:text-5xl px-3 text-2xl font-semibold lg:px-8">We also offer unique<br /> services for your events</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 lg:p-4">
                    {array2.map((item, index) => (
                        <Card3 key={index} image={item.image} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto lg:px-13 lg:p-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <img
                                    src="src/images/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.png"
                                    alt="Food"
                                    className="w-full h-120 rounded-lg object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <img
                                    src="src/images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.png"
                                    alt="Food"
                                    className="w-full h-70 rounded-lg object-cover lg:mt-7"
                                />
                                <img
                                    src="src/images/sadj-iron-pot-with-various-salads 1.png"
                                    alt="Food"
                                    className="w-full h-45 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                        <div className="p-2">
                            <h2 className="text-5xl font-semibold">Fastest Food <br /> Delivery in City</h2>
                            <p className="text-gray-700 mt-6">Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                            <p className="font-semibold pt-5 flex items-center gap-2"><img src="src\images\Icon4.png" alt="" className="w-6 h-6" />Delivery within 30 minutes</p>
                            <p className="font-semibold pt-5 flex items-center gap-2"><img src="src\images\Icon(5).png" alt="" className="w-6 h-6" />Best Offer & Prices</p>
                            <p className="font-semibold pt-5 flex items-center gap-2"><img src="src\images\Icon(6).png" alt="" className="w-6 h-6" />Online Services Available</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2 pt-5 lg:p-15 lg:pb-15 container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-center lg:mb-5 font-semibold">What Our Customers Say</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 lg:p-4">
                    {array4.map((item, index) => (
                        <Card4 key={index} title={item.title} desc={item.desc} image={item.image} name={item.name} />
                    ))}
                </div>
            </div>
            <div className="bg-gray-100 py-10">
                <div className="container mx-auto lg:px-15">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <h1 className="mx-3 text-3xl sm:text-4xl md:text-5xl font-semibold">
                            Our Blog & Articles
                        </h1>
                        <button className="mx-3 font-semibold text-black border-2 border-solid text-sm px-1 py-1 rounded-full sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-3 lg:py-1 lg:text-lg hover:bg-red-700 hover:border-red-700 transition-all duration-900 bg-red-600 text-white hover:border-red-700 hover:bg-white hover:text-black">
                            Read All Articles
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:py-7">
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg mx-5 lg:mx-0 transition duration-800 transform hover:scale-101">
                            <img
                                src="src\images\Mask group (7).png"
                                alt="Featured Blog"
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <p className="text-md px-6">January 3, 2023</p>
                            <h2 className="text-2xl font-bold px-6">The secret tips & tricks to prepare a perfect burger & pizza for our customers</h2>
                            <p className="text-gray-600 px-6 pb-3">
                                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
                            </p>
                        </div>

                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                            {array5.map((item, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-md mx-5 lg:mx-0 transition duration-800 transform hover:scale-102">
                                    <img
                                        src={item.image}
                                        alt="Blog Thumbnail"
                                        className="w-full h-40 object-cover rounded-lg mb-3"
                                    />
                                    <p className="text-gray-600 text-sm px-4">
                                        {item.date}
                                    </p>
                                    <h3 className="text-lg font-semibold leading-tight px-4 pb-3">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;




