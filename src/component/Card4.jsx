
const Card4 = ({ image, title, date, buttonText }) => {
    return (
        <div className="max-w-md rounded-xl overflow-hidden border border-gray-300 bg-white">
            <img className="w-full h-44 object-cover rounded-xl" src={image} alt={title} />
            <div className="py-3 px-2">
                <p className="text-gray-600 text-sm mt-2">{date}</p>
                <h2 className="text-md font-semibold text-gray-800">{title}</h2>
                <button className="font-semibold py-1 px-28 lg:px-19 flex items-center"><p>{buttonText}</p> <img className="w-5 ps-1 pt-1" src="src\images\SVG.png" alt="" /></button>
            </div>
        </div>
    );
};
export default Card4;