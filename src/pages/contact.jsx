import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50">
                <div className="p-2 lg:p-15 lg:pt-35 pt-35 lg:pb-10 container mx-auto pb-15">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:mb-5 font-semibold">Contact Us</h1>
                    <p className="text-center">We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens.</p>
                    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-7">
                        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full font-semibold bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="container lg:px-35 mt-6">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h2 class="text-xl font-semibold mb-2">Call Us</h2>
                                <p class="text-red-600 ">+1-234-567-8900</p>
                            </div>

                            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                                <h2 class="text-xl font-semibold mb-2">Hours:</h2>
                                <p class="text-gray-600">Mon-Fri: 11am - 8pm <br/> Sat, Sun: 9am - 10pm</p>
                            </div>

                            <div class="bg-white p-3 rounded-lg shadow-lg text-center"> 
                                <h2 class="text-xl font-semibold mb-2">Our Location</h2>
                                <p class="text-gray-600">123 Bridge Street <br/>Nowhere Land, LA 12345<br/> United States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact;