import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const array5 = [
    {
        image: "src/images/Mask group (12).png",
        date: "January 3, 2023",
        title: "How to prepare a delicious gluten free sushi"
    },
    {
        image: "src/images/Mask group (13).png",
        date: "January 3, 2023",
        title: "Exclusive baking lessons from the pastry king"
    },
    {
        image: "src/images/Mask group (14).png",
        date: "January 3, 2023",
        title: "How to prepare the perfect fries in an air fryer"
    },
    {
        image: "src/images/Mask group (15).png",
        date: "January 3, 2023",
        title: "How to prepare delicious chicken tenders"
    },
    {
        image: "src/images/Mask group (16).png",
        date: "January 3, 2023",
        title: "5 great cooking gadgets you can buy to save time"
    },
    {
        image: "src/images/Mask group (17).png",
        date: "January 3, 2023",
        title: "The secret tips & tricks to prepare a perfect burger"
    },
    {
        image: "src/images/Mask group (18).png",
        date: "January 3, 2023",
        title: "7 delicious cheesecake recipes you can prepare"
    },
    {
        image: "src/images/Mask group (19).png",
        date: "January 3, 2023",
        title: "5 great pizza restaurants you should visit this city"
    },
    {
        image: "src/images/Mask group (20).png",
        date: "January 3, 2023",
        title: "5 great cooking gadgets you can buy to save time"
    },
    {
        image: "src/images/Mask group (21).png",
        date: "January 3, 2023",
        title: "How to prepare a delicious gluten free sushi"
    },
    {
        image: "src/images/Mask group (22).png",
        date: "January 3, 2023",
        title: "Top 20 simple and quick desserts for kids"
    },
    {
        image: "src/images/Mask group (23).png",
        date: "January 3, 2023",
        title: "Top 20 simple and quick desserts for kids"
    }
];
const Pages = () => {
    return (
        <>
            <Navbar />
            <div className="p-2 lg:p-15 lg:pt-35 pt-35 lg:pb-15 container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:mb-5 font-semibold">Our Blog & Articles</h1>
                <p className="text-center">We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:p-4">
                    {array5.map((item, index) => (
                        <div key={index} className="bg-white mt-5 lg:mt-2 rounded-lg shadow-md mx-5 lg:mx-0 transition duration-800 transform hover:scale-103">
                            <img
                                src={item.image}
                                alt="Blog Thumbnail"
                                className="w-full h-40 object-cover rounded-lg mb-3"
                            />
                            <p className="text-gray-600 text-sm px-4 py-3">
                                {item.date}
                            </p>
                            <h3 className="text-lg font-semibold leading-tight px-4 pb-4">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Pages;