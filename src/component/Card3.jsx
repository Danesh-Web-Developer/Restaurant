const Card3 = (props) => {
    return (
        <div className="bg-white rounded-lg transition duration-800 transform hover:scale-105">
            <img className="w-100 h-50 object-cover mx-auto mb-2 lg:mb-5 lg:mt-4 rounded-xl" src={props.image} alt={props.title} />
            <h2 className="text-xl font-semibold lg:pb-1">{props.title}</h2>
            <p className="pb-1 lg:pb-3">{props.desc}</p>
        </div>
    );
};

export default Card3;