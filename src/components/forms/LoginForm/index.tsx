import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import  styles  from "./style.module.scss"
import { LoginFormSchema } from "./loginFormSchema"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../../services/api"
import { User } from "../../../../BackEnd/src/modules/users/entities/user.entity"


interface FormData {
    name: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
  }

interface LoginFormProps {
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(LoginFormSchema)
    });

    const navigate = useNavigate()

    const[loading, setLoading] = useState(false)

    const userLogin = async (formData: FormData) => {
        try {
            setLoading(true)
            const { data } = await api.post("/login", formData);
            setUser(data.user)
            localStorage.setItem("@TOKEN", data.token)
            navigate("/user")
        } catch (error: any) {
            console.log(error)
            alert("Invalid email or password")
        } finally {
            setLoading(false)
        }
    }
    
    const submit = (formData: FormData) => {
        userLogin(formData);
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            
            <Input 
            label="Seu e-mail" 
            type="email" 
            placeholder="nome@email.com.br" 
            {...register("email")} 
            required
            disabled={loading}/>
            {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>)}

            <InputPassword 
            placeholder="Abf12345678&*" 
            label="Sua Senha" 
            {...register("password")} 
            required
            disabled={loading}/>
            {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>)}

            <div>
                <Link className="link" to="/register_login">Cadastre-se</Link>
                <button className="btn outline" type="submit">
                    {loading ? "Logando..." : "Logar"}
                </button>
            
            </div>
        </form>
    )
}
