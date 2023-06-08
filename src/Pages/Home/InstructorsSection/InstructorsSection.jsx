import { useEffect } from "react";
import { useState } from "react";
import SingleInstructors from "./SingleInstructors";

const InstructorsSection = () => {
    const [instructors, setInstructors] = useState([]) 
    useEffect(() =>{
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => {
            setInstructors(data) 
        })
    }, [])
    return (
        <>
            <section className="py-10 md:py-24">
                <div className="container">
                    <div className="text-center pb-10">
                        <h2 className="text-black font-bold text-3xl pb-4">Our Instructors</h2>
                        <p className="text-black md:w-2/3 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit assumenda unde. Saepe mollitia omnis, dolorem quas accusamus fugiat! Officiis, distinctio, sint dicta sequi, laborum voluptas omnis non nam qui natus veniam. Adipisci praesentium vero est possimus reiciendis cum minus!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-7">
                        {
                            instructors.map(instructor => <SingleInstructors
                            key={instructor._id}
                            instructor={instructor}
                            > 
                            </SingleInstructors>)
                        }
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstructorsSection;