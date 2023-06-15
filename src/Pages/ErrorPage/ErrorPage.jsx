import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate(); 
    return (
        <div className="py-7 md:py-20"> 
                <div className="flex justify-center">
                    <img className="text-white w-1/2" src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" alt="" />
                </div>
                <div className="flex justify-center mt-6">
                    <button onClick={() => navigate('/')} className="btn btn-success">Back to Home</button>
                </div> 
        </div>
    );
};

export default ErrorPage;