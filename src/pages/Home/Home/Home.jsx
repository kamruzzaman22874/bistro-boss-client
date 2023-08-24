import BistroBoss from "../../../components/BistroBoss";
import ContactUs from "../../../components/ContactUs";
import Recommends from "../../../components/Recommends";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <ContactUs/>
            <Recommends/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;