import BistroBoss from "../../../components/BistroBoss";
import ContactUs from "../../../components/ContactUs";
import Recommends from "../../../components/Recommends";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <BistroBoss/>
            <PopularMenu/>
            <ContactUs/>
            <Recommends/>
        </div>
    );
};

export default Home;