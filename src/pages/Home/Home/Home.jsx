import BistroBoss from "../../../components/BistroBoss";
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
        </div>
    );
};

export default Home;