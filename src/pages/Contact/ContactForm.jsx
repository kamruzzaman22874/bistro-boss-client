import SectionTitle from "../../components/SectionTitle";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
    const handleCaptcha =() =>{

    }
    return (
        <div>
            <SectionTitle subHeading={"Send Us a Message"} heading={"CONTACT FORM"}></SectionTitle>
            <div className="full mt-10 bg-orange-100 p-10 mb-10">
                <form >
                    <div className="flex">
                        <div className="mb-4 w-1/2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                required
                            />
                        </div>
                        <div className="mb-4 w-1/2 ml-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone*
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message*
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Write message here"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
                            required
                        />
                    </div>
                    <ReCAPTCHA
                        sitekey="6LcuRNcnAAAAAI8YA8nSH5TMsSTz-UK295F_AbOQ"
                        onChange={handleCaptcha}
                    />,
                    <div className="text-center">
                        <div className="flex justify-center my-8">
                            <button className="btn border-b-2 border-b-orange-600 hover:border-b-orange-500 hover:bg-black hover:text-white">Send your message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;