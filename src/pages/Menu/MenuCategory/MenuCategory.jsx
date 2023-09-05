import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="my-20">
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link className="flex justify-center" to={`/order/${title}`}>
                <div className="card-actions">
                    <button className="btn px-10 border-b-4 hover:border-b-purple-300 border-b-orange-600 hover:bg-black hover:text-white text-orange-500">Order Your Favourite Food</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;