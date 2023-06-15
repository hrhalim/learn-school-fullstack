import axios from 'axios'; 
import { useEffect, useState } from 'react';



const Banner2 = () => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:5000/classes/banner2')
        .then(res => setData(res.data)) 
    }, [])
    return (
        <section className='py-5 md:py-20 border border-t-2'> 
            <div className='mb-10 text-center'>
            <span className='font-bold text-3xl md:text-5xl'>Popular Classes</span>
            </div> 
             <div className='grid md:grid-cols-3 gap-7 md:mx-40'>
                { 
                    data?.map(item =>
                        <div key={item._id} className="card border">
                            <div className="p-3">
                                <div className="h-60 rounded">
                                    <img className='w-full h-full' src={item.image} />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="font-bold text-3xl">{item.name}</h2>
                                <h3 className="font-semibold text-2xl">Available Seats: {item.availableSeats}</h3>
                                <h4 className="font-semibold text-2xl">Price: {item.price}</h4>
                            </div>
                        </div>
                    ) 
                } 
             </div>
        </section>
    );
};

export default Banner2;