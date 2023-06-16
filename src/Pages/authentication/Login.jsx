import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { FaEye, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
    const { logIn, googleLogIn } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [view, setView] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
 
    const onSubmit = data => {
        console.log(data);
        const { email, password } = data;
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: error.message,
                })
            })
    };

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email, role: 'student', image: loggedUser.photoURL }
                fetch('https://learn-school-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            })
    }


    return (
        <section className="min-h-screen py-10">
            <div className="min-h-screen items-center">
                <div className="hero-content w-full">
                    <form className="card flex-shrink-0 shadow-2xl bg-base-100 md:w-2/4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body" >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })} />
                                {errors.email && <p className="text-red-500">Email is required and must be valid</p>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={`${view ? 'text' : 'password'}`} placeholder="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true, pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                            message: 'Password must be at least 6 characters long and contain at least one letter and one number'
                                        }
                                    })} />
                                <button type="button" onClick={() => setView(!view)} ><FaEye className="absolute right-5 bottom-12" /></button>
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>} 
                            </div> 
                            <div className="form-control mt-6">
                                <input className="btn btn-success" value='Login' type="submit" />
                            </div>
                        </div>
                        <p className="pl-7">New Here ? <Link to='/register' className="underline text-success">Register Now</Link></p>
                        <div className="divider"></div>
                        <button type="button" onClick={handleGoogleLogin} className="btn btn-success btn-circle mx-auto mb-5"><FaGoogle /></button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;