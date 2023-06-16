import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [axiosSecure] = useAxiosSecure();
    useEffect(() => {
        const x = axiosSecure.get(`https://learn-school-server.vercel.app/all-users-data`)
            .then(res => setAllUsers(res.data))
    }, [])

    const handleRoleUpdate = (role, email) => {
        console.log(role, email);
        axios.patch(`https://learn-school-server.vercel.app/all-users-data/?email=${email}&role=${role}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const x = axiosSecure.get(`https://learn-school-server.vercel.app/all-users-data`)
                        .then(res => setAllUsers(res.data))
                    Swal.fire('Role updated')
                }
            })
    }

    return (
        <section className='mx-20 min-h-screen py-10 md:py-20'>
            <h2 className='text-3xl text-center font-extrabold mb-10'>Manage Users</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-2xl font-bold text-black'>Name</th>
                            <th className='text-2xl font-bold text-black'>Email</th>
                            <th className='text-2xl font-bold text-black'>Role</th>
                            <th className='text-2xl font-bold text-black'>Actions</th>
                            <th className='text-2xl font-bold text-black'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map(item =>
                                <tr>
                                    <th>{item.name}</th>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td><button className='btn btn-secondary' disabled={item.role === 'admin'} onClick={() => handleRoleUpdate('admin', item.email)}>Make Admin</button></td>
                                    <td><button onClick={() => handleRoleUpdate('instructor', item.email)} className='btn btn-warning' disabled={item.role === 'instructor' || item.role === 'admin'}>Make Instructor</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageUsers;