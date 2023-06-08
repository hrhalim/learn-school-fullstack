import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'
import "./Login.css"
import { FaEye, FaEyeSlash} from 'react-icons/fa';

const Login = () => {
    const [show, setShow] = useState(false); 

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

   const handleLogin = event => {
         event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top center',
                icon: 'success',
                title: 'User Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true});
        })
   }
 
    return (
        <>
            <Helmet>
                <title>MusicLab | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content md:flex">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                <input type={show? "text" : "password"} name="password" placeholder="password" className="w-full input input-bordered" /> 
                                <span className="hide-icon" onClick={() => setShow(!show)}>
                                    {
                                        show? <>
                                        <FaEyeSlash></FaEyeSlash>
                                        </> : <>
                                        <FaEye></FaEye>
                                        </>
                                    }
                                </span>
                                </div>
                            </div> 
                            <div className="form-control mt-6">
                                <input className="btn btn-success" type="submit" value="Login" /> 
                            </div>
                        </form>
                        <p className="p-4"><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;