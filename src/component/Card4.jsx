const Card4 = (props) => {
    return (
        <div className=" bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-xl font-semibold lg:pb-1 text-red-600">{props.title}</p>
            <p className="pb-1 lg:pb-3">{props.desc}</p>
            <p className="font-semibold text-sm pt-5 leading-none flex items-center gap-2"><img src={props.image}  alt="" className="w-12 h-12" />{props.name}</p>
        </div>
    );
};

export default Card4;