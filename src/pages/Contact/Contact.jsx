import contactImg from "../../assets/contact/banner.jpg"
import SectionTitle from "../../components/SectionTitle";
import Cover from "../shared/Cover/Cover";
import { LuPhoneCall } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineClockCircle } from 'react-icons/ai';
import ContactForm from "./ContactForm";


const Contact = () => {
    return (
        <div>
            <Cover img={contactImg} title={"Contact us"}></Cover>
            <SectionTitle subHeading={"Visit Us"} heading={"OUR LOCATION"}></SectionTitle>
            <div className="grid md:grid-cols-3 w-1/2 mx-auto mb-10 p-5">

                <div className="card w-48 bg-orange-100 shadow-xl">
                    <div className="bg-orange-200 text-center text-white flex justify-center p-4">
                        <LuPhoneCall />
                    </div>
                    <div className="card-body p-4 text-center">
                        <h2 className="uppercase">Phone</h2>
                        <p>+88 01989214721</p>
                    </div>
                </div>
                <div className="card w-48 bg-orange-100 shadow-xl">
                    <div className="bg-orange-200 text-center  flex justify-center p-4">
                        <GrLocation className="text-white" />
                    </div>
                    <div className="card-body p-4 text-center">
                        <h2 className="uppercase">Address</h2>
                        <p>+88 01989214721</p>
                    </div>
                </div>
                <div className="card w-48 bg-orange-100 shadow-xl">
                    <div className="bg-orange-200 text-center text-white flex justify-center p-4">
                        <AiOutlineClockCircle/>
                    </div>
                    <div className="card-body p-4 text-center">
                        <h2 className="uppercase">Working Hour</h2>
                        <p>+88 01989214721</p>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
    );
};

export default Contact;