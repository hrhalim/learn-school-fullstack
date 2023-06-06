import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
         <section className="py-10 md:py-20">  
             <img className="w-4/5 m-auto" src="https://res.cloudinary.com/practicaldev/image/fetch/s--_GqDpWw0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/7aqcppklh6bexoa70320.jpg" alt="" />
             <div className="text-center">
                <p className="text-black font-semibold pb-4 text-2xl">Sorry Could not fond</p>
                <Link to="/">
                <button className="btn btn-success">Back to Home</button>
                </Link>
             </div> 
         </section> 
        </>
    );
};

export default ErrorPage;