import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import Contact from "../../Contact/Contact";
import Location from "../../Location/Location";

const BookingTable = () => {

    const handleBookingTable = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const time = form.time.value;
        const guest = form.guest.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        console.log(date, time, guest, name, phone, email);

        const bookigTable = {
            date,
            time,
            guest,
            name,
            phone,
            email
        }
        fetch("http://localhost:8000/booking-table", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookigTable)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Booking has been success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }





    return (
        <div>
            <SectionTitle
                subHeading="Reservation"
                heading="BOOK A TABLE"
            ></SectionTitle>
            <form onSubmit={handleBookingTable}>
                <div className="w-full">
                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>
                            </label>
                            <input name="date" type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Time*</span>
                            </label>
                            <input type="time" name="time" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control max-w-xs">
                            <label className="label">
                                <span className="label-text">Guest*</span>
                            </label>
                            <select name="guest" className="select select-bordered">
                                <option disabled selected>Pick one</option>
                                <option>One Person</option>
                                <option>Two Person</option>
                                <option>Three Person</option>
                                <option>Four Person</option>
                                <option>Five Person</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid md:grid-cols-3 gap-5">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Name*</span>
                            </label>
                            <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Phone Number*</span>
                            </label>
                            <input type="number" name="phone" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Email*</span>
                            </label>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <button className="">Book A Table</button>
                </div>
            </form>

            <div className="bg-gray-100 py-5">
                <SectionTitle
                    subHeading="Visit Us"
                    heading="OUR LOCATION"
                ></SectionTitle>

                <div>
                    <Location />
                </div>
            </div>
        </div>
    );
};

export default BookingTable;