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
            <section className="py-10 md:py-24">
                <div className="container">
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