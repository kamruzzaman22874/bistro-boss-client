import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section className="pt-8 my-20 bg-fixed" style={{ backgroundImage: `url(${featuredImg})`}}>

            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="md:flex items-center justify-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 24, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quia vero, ex quisquam corporis, facilis nihil harum tempore earum libero minima eos laboriosam voluptates ipsam iure molestiae error numquam? Porro perspiciatis quia minus perferendis laboriosam, quos quibusdam, fuga non, nesciunt possimus expedita rem! Eum quidem optio asperiores dolores ut debitis.</p>
                    <button className="btn px-10 border-0 border-b-4 border-b-orange-600 hover:border-b-purple-300 hover:bg-black hover:text-white text-orange-500">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;