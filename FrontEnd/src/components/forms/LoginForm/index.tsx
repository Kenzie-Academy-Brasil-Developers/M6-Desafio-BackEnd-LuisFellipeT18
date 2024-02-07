import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import  styles  from "./style.module.scss"
import { LoginFormSchema } from "./loginFormSchema"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"


interface FormData {
    name: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
  }

export const LoginForm = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset 
    } = useForm<FormData>({
        resolver: zodResolver(LoginFormSchema)
    });

    const[loading, setLoading] = useState(false)

    const { userLogin } = useContext(UserContext)
    
    const submit = (formData: FormData) => {
        userLogin(formData, setLoading, reset);
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
                <button className="btn outline" type="submit">
                    {loading ? "Logando..." : "Logar"}
                </button>
                <Link className="link" to="/register_login">Cadastre-se</Link>
            
            </div>
        </form>
    )
}
