import{ Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { CreateContactPage } from "../pages/CreateContactPage";
import { EditContactPage } from "../pages/EditContactPage";



export const RoutesMain = () => {
 
    return (
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<HomePage/>} />
                <Route path="/register_login" element={<RegisterPage/>} />
            </Route>

            <Route element={<PrivateRoutes/>}>
                <Route path="/user" element={<UserPage />}/>
                <Route path="/contacts" element={<CreateContactPage />}/>
                <Route path="/contacts/edit" element={<EditContactPage />}/>
            </Route>

            <Route path="*" element={<ErrorPage/>} />
            
        </Routes>
    )
}