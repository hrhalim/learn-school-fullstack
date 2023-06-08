import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ClassesSection from "../ClassesSection/ClassesSection";
import InstructorsSection from "../InstructorsSection/InstructorsSection";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ClassesSection></ClassesSection>
            <InstructorsSection></InstructorsSection>
            <AboutSection></AboutSection>
        </>
    );
};

export default Home;