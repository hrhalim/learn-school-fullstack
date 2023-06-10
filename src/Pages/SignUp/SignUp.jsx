
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const SignUp = () => {

 const { register, handleSubmit, formState: { errors } } = useForm();
 const {createUser, updateUserProfile} = useContext(AuthContext)
 const navigate = useNavigate()

 const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser); 
        updateUserProfile(data.name, data.photo)
        .then( () => {
            console.log('User profile info update');   
            // reset(); 
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Sign Up Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/login');
        })
        .catch(error => {
            console.log(error);
        })
    })
     
 }

    return (
        <>
             <Helmet>
                <title>MusicLab | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content md:flex">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6 md:w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" name="name" placeholder="Name" className="input input-bordered" />
                             {errors.name && <span className="text-red-600">Name is required</span>} 
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email"name="email" placeholder="email" className="input input-bordered" />
                              {errors.email &&  <span className="text-red-600">Email is required</span>}
                            </div> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { 
                                    required: true,
                                     minLength: 6,
                                      maxLength: 20, 
                                       })} type="password"name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be lest 20 characters</span>}
                            </div> 
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("password", { 
                                    required: true,
                                     minLength: 6,
                                       })} type="password" name="ConfirmPassword" placeholder="Confirm Password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            </div>  */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input  {...register("photo")} type="text" name='photo' placeholder="Photo URL" className="input input-bordered" /> 
                            </div> 
                            <div className="form-control mt-6">
                                <input className="btn btn-success" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='pb-5 pl-5'><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;