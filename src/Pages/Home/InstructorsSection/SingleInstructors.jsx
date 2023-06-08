
const SingleInstructors = ({instructor}) => {
    const {name, students, description, picture} = instructor;
    return (
        <>
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-90" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>{students}</h3>
                    <p>{description}</p> 
                </div>
         </div>  
            
        </>
    );
};

export default SingleInstructors;