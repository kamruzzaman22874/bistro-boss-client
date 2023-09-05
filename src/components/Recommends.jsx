import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Recommend from "./Recommend";

const Recommends = () => {
    const [salads, setSalads] = useState([])

    useEffect(() =>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const saladsItem = data.filter(item => item.category === "salad")
            setSalads(saladsItem)
        })
    },[])
    return (
        <section>
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>


            <div className="grid md:grid-cols-3 gap-10">
                {
                    salads.slice(6).map(salad => <Recommend
                    key={salad._id}
                    salad={salad}
                    ></Recommend>)
                }
            </div>
            <div className="flex justify-center my-8">
                <button className="btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white">View Full Menu</button>
            </div>
        </section>
    );
};

export default Recommends;