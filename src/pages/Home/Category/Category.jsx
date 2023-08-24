import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img className='' src={slide1} alt="" />
                    <p className='text-3xl w-full text-center font-bold text-white uppercase md:-mt-20'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-3xl text-center font-bold text-white uppercase md:-mt-20'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-3xl text-center font-bold text-white uppercase md:-mt-20'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-3xl text-center font-bold text-white uppercase md:-mt-20'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='bg-black bg-opacity-30' src={slide5} alt="" />
                    <p className='text-3xl text-center font-bold text-white uppercase md:-mt-20'>Salad</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;