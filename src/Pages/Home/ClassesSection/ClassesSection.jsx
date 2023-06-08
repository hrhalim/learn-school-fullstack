import { useState } from "react";
import { useEffect } from "react";
import SingleClasses from "./SingleClasses";

const ClassesSection = () => {
   const [students, setStudents] = useState([]) 
    useEffect(() =>{
        fetch('students.json')
        .then(res => res.json())
        .then(data => {
            setStudents(data) 
        })
    }, [setStudents])

    return (
        <>
            <section className="py-10 md:py-24 bg-slate-100"> 
                <div className="container">
                    <div className="text-center pb-10">
                        <h2 className="text-black font-bold text-3xl pb-4">Our Classes</h2>
                        <p className="text-black md:w-2/3 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit assumenda unde. Saepe mollitia omnis, dolorem quas accusamus fugiat! Officiis, distinctio, sint dicta sequi, laborum voluptas omnis non nam qui natus veniam. Adipisci praesentium vero est possimus reiciendis cum minus!
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-7">
                        {
                            students.map(student => <SingleClasses
                            key={student._id}
                            student={student}
                            > 
                            </SingleClasses>)
                        }
                        
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default ClassesSection;