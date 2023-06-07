import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./Banner.css"
// import required modules
import { Autoplay, Navigation } from "swiper";

const Banner = () => {
    return (
        <>
            <div className="banner-slider relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="banner-slide bg-[url('https://images.pexels.com/photos/8106191/pexels-photo-8106191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"> 
                    <div className="banner-content py-28 md:py-64">
                        <h2 className="text-white text-3xl md:text-4xl font-bold pb-5">Solfeggio Best Teachers</h2>
                        <button className="btn btn-success">Book Online</button>
                    </div> 
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="banner-slide bg-[url('https://images.pexels.com/photos/4898305/pexels-photo-4898305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"> 
                    <div className="banner-content py-28 md:py-64">
                        <h2 className="text-white text-3xl md:text-4xl font-bold pb-5">solfeggio image Award-Winning Process</h2>
                        <button className="btn btn-success">Book Online</button>
                    </div> 
                    </div>
                </SwiperSlide> 
                <SwiperSlide>
                    <div className="banner-slide bg-[url('https://images.pexels.com/photos/8106193/pexels-photo-8106193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"> 
                    <div className="banner-content py-28 md:py-64">
                      <h2 className="text-white text-3xl md:text-4xl font-bold pb-5">Award-Winning Process</h2>
                       <button className="btn btn-success">Book Online</button>
                    </div> 
                    </div>
                </SwiperSlide>  
            </Swiper>
            </div>
        </>
    );
};

export default Banner;