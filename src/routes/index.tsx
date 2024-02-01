import{ useNavigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { UserPage } from "../pages/UserPage";
import { ErrorPage } from "../pages/ErrorPage";
import { useState } from "react";
import { User } from "../../BackEnd/src/modules/users/entities/user.entity"

export const RoutesMain = () => {
    const [user, setUser] = useState<User | null>(null)

    const userLogout = () => {
        const navigate = useNavigate()
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }
    return (
        <Routes>
            <Route path="/" element={<HomePage setUser={setUser}/>} />
            <Route path="/register_login" element={<RegisterPage/>} />
            <Route path="/user" element={<UserPage user={user} userLogout={userLogout}/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    )
}