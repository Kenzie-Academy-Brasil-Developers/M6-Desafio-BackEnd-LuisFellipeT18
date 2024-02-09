import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import React from 'react';
import { api } from "../../services/api";
import { toast } from "react-toastify";

interface UserProviderProps {
    children: ReactNode;
  }

interface User {
    id: string;
    name: string;
    email: string;
    telephone: string;
}

export const UserContext = createContext<any>({})

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)

    const [editingUser, setEditingUser] = useState<User | null>(null);

    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate();

    const pathname = window.location.pathname

    useEffect(()=> {
        const token = localStorage.getItem("@TOKEN")
        const userId = localStorage.getItem("@USERID")

        const getUser = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(data)
                navigate(pathname)
            } catch (error) {
                console.log(error)
            }finally {
                setLoading(false)
            }
        }
        if(userId && token){
            getUser()
        }
    }, [])
    
    
    const userLogin = async (
        formData: FormData, 
        setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
        reset: () => void) => {
            
            try {
                setLoading(true)
                const { data } = await api.post("/login", formData);
                setUser(data.user)
                localStorage.setItem("@TOKEN", data.token) 
                localStorage.setItem("@USERID", data.user.id)
                reset()
                navigate("/user")
                toast.success("Logando...")
            } catch (error: any) {
                console.log(error)
                toast.error("Invalid email or password")
            } finally {
                setLoading(false)
            }
        }
        
    const userLogout = () => {
        setUser(null)
        navigate("/")
        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        toast.warning("Deslogando...")
    }
    const userRegister = async (
        formData: FormData, 
        setLoading: Dispatch<SetStateAction<boolean>>) => {

            try {
                setLoading(true)
                await api.post("/users", formData)
                navigate("/")
                toast.success("cadastro realizado com sucesso")
            } catch (error: any) {
                toast.error("Usuário já cadastrado")
            } finally {
                setLoading(false)
            }
        }
    const userEdit = async (
        userId: string,
        formData: FormData,
        ) => {
            const token = localStorage.getItem("@TOKEN")
                
            try {
                await api.patch(`/users/${userId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                toast.success("Usuário editado com sucesso");
            } catch (error) {
                console.log(error)
            }
        }
    
    const userDelete = async (
        userId: string) => {
        const token = localStorage.getItem("@TOKEN")
            try {
                await api.delete(`/users/${userId}`,{
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                localStorage.removeItem("@USERID");
                localStorage.removeItem("@TOKEN");
                setTimeout(() => {
                window.location.href = '/';
            }, 2000);
            } catch (error) {
                toast.success("Usuário deletado com sucesso");
            }
        }
    
    return (
        <UserContext.Provider value={{
            loading, 
            user, 
            userLogin, 
            userRegister, 
            userLogout,
            userEdit,
            editingUser,
            setEditingUser,
            userDelete}}>
            {children}
        </UserContext.Provider>
    )
}
    