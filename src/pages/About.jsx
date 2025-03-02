import Card2 from "../component/Card2";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const array3 = [
    {
        image: "src/images/img.png",
        title: "We provide healthy food for your family.",
        desc1: "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
        desc2: "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.",
    }
];
const array = [
    {
        title: "3",
        desc: "Locations",
    },
    {
        title: "1995",
        desc: "Founded",
    },
    {
        title: "65 +",
        desc: "Staff Members",
    },
    {
        title: "100 %",
        desc: "Satisfied Customers",
    }
];
const About = () => {
    return (
        <>
            <Navbar />
            <div className="p-2 pt-5 pt-35 lg:pt-35 lg:p-15 lg:pb-10 bg-gray-100">
                {
                    array3.map((item, index) => (
                        <Card2 key={index} image={item.image} title={item.title} desc1={item.desc1} desc2={item.desc2} />
                    ))
                }
            </div>
            <div>
                <iframe
                    className="w-full max-w-9xl h-120 aspect-video "
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="bg-gray-100 p-8">
                    <div className="container mx-auto lg:px-15 lg:py-10 flex flex-col md:flex-row">
                        <div className="md:w-2/3 pr-0 md:pr-8 flex flex-col justify-between">
                            <div className="p-6 mb-5">
                                <h2 className="text-3xl md:text-5xl font-semibold mb-2">
                                    A little information<br /> for our valuable guest
                                </h2>
                                <p className="text-gray-600 text-sm md:text-base">
                                    At place, we believe that dining is not just about food, but also about the
                                    overall experience. Our staff, renowned for their warmth and dedication,
                                    strives to make every visit an unforgettable event.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {array.map((item, index) => (
                                    <div key={index} className="bg-white p-4 md:p-6 text-center rounded-lg shadow">
                                        <h3 className="text-2xl md:text-4xl font-medium">{item.title}</h3>
                                        <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/3 flex items-center justify-center mt-6 md:mt-0">
                            <img
                                src="src/images/Mask group (32).png"
                                alt="Placeholder"
                                className="rounded-2xl shadow-md w-full md:w-auto max-w-xs md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default About;