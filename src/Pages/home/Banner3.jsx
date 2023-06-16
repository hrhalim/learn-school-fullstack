import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Banner3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios('https://learn-school-server.vercel.app/teachers/banner3')
            .then(res => setData(res.data)) 
    }, []) 
    return (
        <section className='py-7 md:py-20'>
            <div className='mb-11'>
                <h3 className='text-3xl md:text-5xl font-bold text-center'>Popular Instructors</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-7 md:mx-40 px-4'>
                {
                    data?.map(teacher =>
                        <div key={teacher._id} className="card shadow-2xl"> 
                                <div className="h-96">
                                    <img className='w-full h-full' src={teacher.image ? teacher.image : "Not Found" } />
                                </div> 
                            <div className="card-body">
                                <h2 className="font-bold text-3xl">{teacher.name ? teacher.name: "Not Found"}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Banner3;