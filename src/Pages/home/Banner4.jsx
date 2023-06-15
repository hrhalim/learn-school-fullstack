// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; 
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'; 
import { SunnyMorning } from 'moving-letters'  


const Banner4 = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <section className="py-7 md:py-20 border border-t-2">
            <span className="font-bold mb-20 text-center
            ">
                <SunnyMorning text='Feedback'/> 
                </span>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-lg"
            >
                {
                    reviews?.map(review =>
                        <SwiperSlide
                            className="space-y-10 py-5"
                            key={review.author}> 
                            <div className="flex justify-center">
                            <img style={{width: 100, height:100, borderRadius:100}} src={review.picture} alt="img" /> 
                            </div>
                            <p className="font-semibold text-xl md:w-2/3 m-auto">
                                {review.content}
                            </p>
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180, }}
                                value={review.rating}
                                readOnly
                            />
                            <h3 className="text-3xl font-semibold pb-5">
                                {review.author}
                            </h3>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </section>
    );
};

export default Banner4;