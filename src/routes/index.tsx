import{ Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ContactPage } from "../pages/ContactPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register_login" element={<RegisterPage/>} />
            <Route path="/contacts" element={<ContactPage/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}