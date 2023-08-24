import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu , setMenu]= useState([])
    useEffect(() =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
        })
    },[])
    return (
        <section>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;