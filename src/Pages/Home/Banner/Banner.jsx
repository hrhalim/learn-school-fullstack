import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
             <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/7245482/pexels-photo-7245482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/4210808/pexels-photo-4210808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7693952/pexels-photo-7693952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/7693952/pexels-photo-7693952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
                </div>
            </Carousel>
        </>
    );
};

export default Banner;