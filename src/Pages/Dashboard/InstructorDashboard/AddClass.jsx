
const AddClass = () => {

    const handleSubmitInstructor = (event) => {
        event.preventDefault()
        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const addInstructor = {className, classImage, instructorName, email, availableSeats, price }
        console.log(addInstructor);
    }

    return (
        <> 
            <div className="hero min-h-screen bg-base-200"> 
                <div className="md:w-3/5"> 
                <div>
                    <h1 className="text-3xl font-bold text-black text-center pb-4">Add Instructors</h1>
                </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitInstructor} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input type="text" name="className" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="text" name="classImage" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" name="instructorName" className="input input-bordered" />
                        </div> 
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" name="availableSeats" className="input input-bordered" /> 
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" className="input input-bordered" /> 
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-success">Add Instructor</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddClass;