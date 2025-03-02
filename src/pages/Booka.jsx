import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Booka = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 lg:pt-30 pt-35">
                <div className="p-2 lg:p-15 lg:pt-5 lg:pb-15 container mx-auto pb-15">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:mb-5 font-semibold">Book A Table</h1>
                    <p className="text-center">We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
                        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                        <form className="space-y-4">
                            <label className="font-semibold">Date</label>
                            <input
                                type="date"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="font-semibold">Time</label>
                            <input
                                type="time"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="font-semibold">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="font-semibold">Phone</label>
                            <input
                                type="number"
                                placeholder="x-xxx-xxx-xxxx"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <label className="font-semibold">Total Person</label>
                            <input
                                type="text"
                                placeholder="Person"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full mt-3 font-semibold bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
                            >
                                Book A Table
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Booka;