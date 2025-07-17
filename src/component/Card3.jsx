const Card1 = (props) => {
    return (
        <>
            <div className="bg-white text-center transition duration-800 transform hover:scale-102 hover:shadow-2xl hover:bg-gray-100">
                <div className="flex gap-4">
                    <button className="px-4 py-1 bg-yellow-600 font-semibold text-sm rounded-xl absolute z-1 ms-28 top-5">Featured</button>
                    <button className="px-4 py-1 bg-gray-400 text-white font-semibold text-sm rounded-xl absolute z-1 top-5 left-3">FOR SALE</button>
                </div>

                <p className='absolute z-1 bottom-8 left-5 text-white font-semibold text-lg pb-1'>{props.title}</p>
                <div className="flex gap-4">
                    <img className="absolute z-1 bottom-3 left-4" src="src\images\Icon(3).png" alt="" /><p className='ms-5 absolute z-1 bottom-3 left-5 text-white'>{props.desc}</p>
                </div>
                <img className="w-130 h-85 object-cover mx-auto rounded-lg relative" src={props.image} alt={props.title} />
            </div>
        </>
    )
}
export default Card1;