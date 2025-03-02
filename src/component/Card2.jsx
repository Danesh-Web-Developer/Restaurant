const Card2 = (props) => {
    return (
        <div className="container mx-auto px-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-2">
                    <img src={props.image} alt="Food" className="w-full h-auto rounded-lg" />
                </div>
                <div className="p-2">
                    <h2 className="lg:text-5xl text-3xl font-semibold">{props.title}</h2>
                    <p className="text-gray-700 mt-6">{props.desc1}</p>
                    <p className="text-gray-700 mt-4">{props.desc2}</p>
                    <div>
                        <button className="border border-solid px-4 py-2 mt-8 rounded-full">More About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
