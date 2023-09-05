import { useState } from "react";
import orderImg from "../../../assets/shop/order.jpg"
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const {category} = useParams();
    const intialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(intialIndex)
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderImg} title={"Our Order"}></Cover>
            <div className="my-12">
                <Tabs className="" defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="py-5 w-1/2 mx-auto px-36 border-0 ">
                        <div className=" hover:bg-orange-600">
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soups</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </div>
                    </TabList>
                    <TabPanel> <OrderTab items={salad}></OrderTab></TabPanel>
                    <TabPanel> <OrderTab items={pizza}></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={soup}></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={desserts}></OrderTab> </TabPanel>
                    <TabPanel> <OrderTab items={drinks}></OrderTab> </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;