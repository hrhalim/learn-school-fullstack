import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const imgURL = 'https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg';
    return (
        <div className="hero min-h-screen"  style={{ backgroundImage: `url(${imgURL})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <button onClick={() => navigate('/')} className="btn btn-primary">Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;