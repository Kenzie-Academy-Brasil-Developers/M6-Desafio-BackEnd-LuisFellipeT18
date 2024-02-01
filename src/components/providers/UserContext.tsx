import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"
import { useNavigate } from "react-router-dom"
import React from 'react';
import { api } from "../../services/api";

interface UserProviderProps {
    children: ReactNode;
  }

export const UserContext = createContext<any>({})

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    
    const navigate = useNavigate()
    
    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@TOKEN")
    }

    const userLogin = async (
        formData: FormData, 
        setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
        reset: () => void) => {

        try {
            setLoading(true)
            const { data } = await api.post("/login", formData);
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            reset()
            navigate("/user")
        } catch (error: any) {
            console.log(error)
            alert("Invalid email or password")
        } finally {
            setLoading(false)
        }
    }

    const userRegister = async (
        formData: FormData, 
        setLoading: Dispatch<SetStateAction<boolean>>) => {

        try {
            setLoading(true)
            await api.post("/users", formData)
            navigate("/")
            alert("cadastro realizado com sucesso")
        } catch (error: any) {
                alert("Usuário já cadastrado")
        } finally {
            setLoading(false)
        }
    }
    
    return (
        <UserContext.Provider value={{user, userLogin, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}