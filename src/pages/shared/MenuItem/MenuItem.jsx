const MenuItem = ({item}) => {
    const { name, image,  price, recipe } = item;
    return (
        <div>
            <div className="flex space-x-2">
                <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[90px] border" src={image} alt="" />
                <div>
                    <h2 className="uppercase">{name} --------------</h2>
                    <p>{recipe}</p>
                </div>
                <p className="text-orange-600">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;