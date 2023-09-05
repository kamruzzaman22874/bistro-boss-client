import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from "../../../assets/menu/menu-bg.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"/>
            <SectionTitle subHeading="Don't Miss" heading="Our Offerd"></SectionTitle>
            {/* Offerd menu items  */}
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory img={dessertImg} items={desserts} title={"dessert"}></MenuCategory>
            <MenuCategory img={pizzaImg} items={pizza} title={"pizza"}></MenuCategory>
            <MenuCategory img={soupImg} items={soup} title={"soup"}></MenuCategory>
            <MenuCategory img={saladImg} items={salad} title={"salad"}></MenuCategory>
        </div>
    );
};

export default Menu;