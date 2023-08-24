const Recommend = ({ salad }) => {

    const { name, image, recipe } = salad;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn border-b-2 border-b-orange-600 hover:bg-black hover:text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Recommend;