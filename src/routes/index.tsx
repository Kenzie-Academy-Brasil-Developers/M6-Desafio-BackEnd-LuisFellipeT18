import{ Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { ContactProvider } from "../components/providers/ContactContext";


export const RoutesMain = () => {
 
    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/register_login" element={<RegisterPage/>} />
            </Route>

            <Route element={<PrivateRoutes/>}>
                <Route 
                path="/user" 
                element={
                    <ContactProvider>
                        <UserPage />
                    </ContactProvider>
                   } 
                />
            </Route>

            <Route path="*" element={<ErrorPage/>} />
            
        </Routes>
    )
}