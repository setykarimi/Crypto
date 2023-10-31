import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [pathname]);
    return ( 
        <div className="container">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;