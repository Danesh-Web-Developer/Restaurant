const Card2 = (props) => {
    return (
        <>
            <div className="bg-white lg:mt-6 text-center">
                <img className="w-10 h-10 object-cover mx-auto rounded-lg" src={props.image} alt={props.title} />
                <p className='font-semibold text-lg'>{props.title}</p>
                <p className=''>{props.desc}</p>
            </div>
        </>
    )
}
export default Card2;
