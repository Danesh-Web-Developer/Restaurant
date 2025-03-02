const Card = (props) => {
    return (
        <div className="bg-white border rounded-lg shadow-lg p-4 text-center transition duration-800 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
            <img className="w-20 h-20 object-cover mx-auto mb-2 lg:mb-5 lg:mt-4" src={props.image} alt={props.title} />
            <h2 className="text-xl font-semibold lg:pb-1">{props.title}</h2>
            <p className="pb-1 lg:pb-3">{props.desc}</p>
            <p className="text-red-600 font-semibold lg:pb-1">{props.btn}</p>
        </div>
    );
};

export default Card;