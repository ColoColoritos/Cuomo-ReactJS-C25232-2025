import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer";

export const MainLayout = () => {
    return (
        <div className="d-flex flex-column min-vh-100"> 
            <Header />
            <div className="main-content flex-grow-1"> 
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}