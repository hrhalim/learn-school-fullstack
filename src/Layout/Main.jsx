import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <>
            {
              noHeaderFooter ||  <Header></Header>
            }
            <Outlet></Outlet>
            {
               noHeaderFooter || <Footer></Footer>
            }
        </>
    );
};

export default Main;