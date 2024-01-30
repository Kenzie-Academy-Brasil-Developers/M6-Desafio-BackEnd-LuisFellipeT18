import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema"
import  styles  from "./style.module.scss"

interface FormData {
    name: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
  }

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(registerFormSchema)
    });


    const submit = (formData: FormData) => {
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input 
            label="Seu nome" 
            type="text" 
            placeholder="Maria Silva" 
            {...register("name")} 
            required/>
            {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>)}

            <Input 
            label="Seu e-mail" 
            type="email" 
            placeholder="nome@email.com.br" 
            {...register("email")} 
            required/>
            {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>)}

            <Input 
            label="Seu telefone" 
            type="text" 
            placeholder="11987788546" 
            {...register("telephone")} 
            required/>
            {errors.telephone && (
            <p className={styles.errorMessage}>{errors.telephone.message}</p>)}

            <InputPassword 
            label="Crie uma senha" 
            type="password" 
            {...register("password")} 
            required/>
            {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>)}

            <InputPassword 
            label="Confirme sua senha" 
            type="password" 
            {...register("confirmPassword")} 
            required/>
            {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>)}  

            <div>
                <Link to="/">voltar</Link>
                <button>Cadastre-se</button>
            </div>
        </form>
    )
}