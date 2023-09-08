import { FaStar } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const Reviews = () => {
    const { user } = useAuth()
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const handleAddToReveiw = (event) => {
        event.preventDefault();
        const form = event.target;
        const like = form.like.value;
        const suggetion = form.suggetion.value;
        const express = form.express.value;
        const addReviews = {
            name: user?.displayName,
            rating,
            like,
            suggetion,
            express,
        }

        fetch("http://localhost:8000/review", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addReviews)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="my-10">
            <SectionTitle
                subHeading="Sharing is Caring!!!"
                heading="GIVE A REVIEW..."
            ></SectionTitle>
            <div className="bg-gray-200">

                <div >
                    <h2 className="text-2xl uppercase text-center py-5 mb-0">Rate Us!</h2>
                    <form onSubmit={handleAddToReveiw} className="mt-0">
                        <div className=" text-yellow-500 text-4xl space-x-5">
                            <div className="flex justify-center">
                                <div>
                                    <Rating
                                        initialRating={rating}
                                        style={{ maxWidth: 180 }}
                                        value={rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                        onChange={handleRatingChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <label>Which recipe you liked most?</label>
                        <input name="like" type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <label>Do you have any suggestion for us?</label>
                        <input name="suggetion" type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <label>Kindly express your care in a short way.</label>
                        <textarea placeholder="Write your message" className="w-full p-3 rounded text-black border-0 outline-none" name="express" id="" cols="30" rows="10"></textarea>
                        <div className="pb-5">
                            <button type='submit'
                                className='btn btn-primary rounded-md text-white capitalize flex gap-2'
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)'
                                }}
                            >
                                <span>Send Review</span>
                                <BsFillRocketTakeoffFill size={15} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reviews;