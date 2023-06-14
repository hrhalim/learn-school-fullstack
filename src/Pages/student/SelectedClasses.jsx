import React from 'react';
import useStudent from '../../hooks/useStudent';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const SelectedClasses = () => {
    const [isStudent, , refetch] = useStudent();

    const handleDeleteLecture = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/classes-cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <section className='py-10 md:py-24'>
            <div className="overflow-x-auto mx-40 min-h-screen">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-3xl font-bold text-black'>#</th>
                            <th className='text-3xl font-bold text-black'>Lecture Name</th>
                            <th className='text-3xl font-bold text-black'>Instructor</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='items-center'>
                        {
                            isStudent?.map((s, index) =>
                                <tr key={s._id}>
                                    <th>{index + 1}</th>
                                    <td>{s.lecture.name}</td>
                                    <td>{s.lecture.instructor}</td>
                                    <td ><button onClick={() => handleDeleteLecture(s._id)} className='btn btn-error'><FaTrashAlt /></button></td>
                                    <td><Link  to={{
                                        pathname: `/dashboard/studentClasses/pay/${s._id}`,
                                    }}><button className='btn btn-warning' >Pay</button></Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default SelectedClasses;


// to={`/dashboard/studentClasses/pay`}