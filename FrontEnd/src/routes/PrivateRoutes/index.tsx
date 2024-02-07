import { useContext } from "react";
import { UserContext } from "../../components/providers/UserContext"
import { Navigate, Outlet } from "react-router-dom";
import { ContactProvider } from "../../components/providers/ContactContext";


export const PrivateRoutes = () => {
    const { user } = useContext(UserContext);

    return user ? <ContactProvider><Outlet /></ContactProvider> : <Navigate to="/" />
}