const Recommend = ({ salad }) => {

    const { name, image, recipe } = salad;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn px-10 border-b-4 hover:border-b-purple-300 border-b-orange-600 hover:bg-black hover:text-white text-orange-500">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Recommend;