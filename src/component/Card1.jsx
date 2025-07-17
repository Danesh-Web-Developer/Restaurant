const Card1 = (props) => {
    return (
        <>
            <div className="bg-white lg:mt-6 text-center transition duration-800 transform hover:scale-102 hover:shadow-2xl hover:bg-gray-100">
                <p className='absolute z-1 top-4 left-5 text-white font-semibold text-lg'>{props.title}</p>
                <p className='absolute z-1 top-10 left-5 text-white'>{props.desc}</p>
                <img className="w-95 h-68 object-cover mx-auto rounded-lg relative" src={props.image} alt={props.title} />
            </div>
        </>
    )
}
export default Card1;
