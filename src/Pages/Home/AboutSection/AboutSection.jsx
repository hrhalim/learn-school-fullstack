const AboutSection = () => {
    return (
        <>
        <section className="py-10 md:24 bg-[url('https://images.pexels.com/photos/6173860/pexels-photo-6173860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-1xl font-semibold text-yellow-400">Our Classes</h2>
                        <h3 className="text-3xl font-bold text-white pb-5">About School</h3>
                        <p className="pb-4 text-white">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada. Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit</p>
                        <p className="pb-4 text-white">Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada. Integer in justo vulputate purus sit amet vestibulum ultrices mauris malesuada.</p>
                        <button className="btn btn-success">View More</button>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/wwM3dg8/family.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
            
        </>
    );
};

export default AboutSection;