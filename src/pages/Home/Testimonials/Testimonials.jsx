import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../../../hooks/useAuth";

const Testimonials = () => {
    const [reviews , setReviews] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch("http://localhost:8000/review")
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
    return (
        <section className="my-10">

            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}

                    >
                        <div className="flex flex-col items-center mx-24">
                            <Rating
                            
                            style={{maxWidth:180}}
                            value={review.rating}
                            readOnly
                            className="mb-5"
                            
                            ></Rating>
                            <FontAwesomeIcon className="text-7xl mb-5" icon={faQuoteLeft} />
                            <p className="">{review.like}</p>
                            <p className="">{review.suggetion}</p>
                            <h3 className="text-2xl text-orange-400">{review?.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;