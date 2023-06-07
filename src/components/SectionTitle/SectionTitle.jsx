const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-4/12 my-8 m-auto border-b-2 pb-3">
            <span className="text-1xl text-yellow-400">{subHeading}</span>
            <h2 className="text-3xl">{heading}</h2> 
        </div>
    );
};

export default SectionTitle;