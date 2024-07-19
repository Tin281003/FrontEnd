import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import FAB from "../components/FAB";

const Layout = () => {
    return (
        <div className="text-gray-700 pt-9 sm:pt-10">
            <Header></Header>
            <Outlet></Outlet>
            <FAB></FAB>
            <ScrollToTop />
            <Footer></Footer>
        </div>
    );
};

export default Layout;
