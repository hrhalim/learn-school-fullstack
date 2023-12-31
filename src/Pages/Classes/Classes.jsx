import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from './../../hooks/useAdmin';
import useInstructor from './../../hooks/useInstructor';


const Classes = () => {
    const { data } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor(); 


    const addToCart = (lecture) => {
        if (!user) {
            Swal.fire({
                title: 'You have to Login first',
                showCancelButton: true,
                confirmButtonText: 'Login',
            }).then((result) => { 
                if (result.isConfirmed) {
                    navigate('/login');
                    return;
                }
            })
        }


        const lectureData = { lecture, email: user.email }
        axios.post('https://learn-school-server.vercel.app/classes-cart', lectureData)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire(
                        '',
                        'Added to Cart',
                        'success'
                    )
                }
            })

    }

    return (
       <section className="py-7 md:pb-20 md:pt-40">
        <div className="grid lg:grid-cols-3 md:mx-40 gap-5 m-auto">
            {
                data?.map(lecture =>
                    <div key={lecture._id} className={`${lecture.availableSeats == 0 ? 'bg-red-600' : ''} border rounded-xl bg-white border-slate-300 w-[300px] p-4`}>
                        <img src={lecture.image} className="rounded-t-xl w-auto mb-4 h-52" />
                        <div className={`space-y-2`}>
                            <h3 className="text-2xl font-bold">{lecture.name}</h3>
                            <p>Instructor: {lecture.instructor}</p>
                            <p>Price: ${lecture.price}</p>
                            <p>Available Seats : {lecture.availableSeats}</p>
                            <button disabled={lecture.availableSeats <= 0 || isAdmin.length > 0 || isAdmin?.role == 'admin' ||isInstructor} onClick={() => addToCart(lecture)} className="btn btn-success py-1">Select</button>

                        </div>
                    </div>)
            }

        </div>
       </section>
    );
};

export default Classes;