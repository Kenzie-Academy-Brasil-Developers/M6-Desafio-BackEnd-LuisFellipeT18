import { Link} from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { InputPassword } from "../InputPassword"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerFormSchema } from "./registerFormSchema"
import  styles  from "./style.module.scss"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"

interface FormData {
    name: string;
    email: string;
    telephone: string;
    password: string;
    confirmPassword: string;
  }

export const RegisterForm = () => {
    const { 
        register, 
        handleSubmit, formState: { errors } 
    } = useForm<FormData>({
        resolver: zodResolver(registerFormSchema)
    });

    const [loading, setLoading] = useState(false)

    const {userRegister} = useContext(UserContext)

    const submit = (formData: FormData) => {
        userRegister(formData, setLoading)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input 
            label="Seu nome" 
            type="text" 
            className="label"
            placeholder="Maria Silva" 
            {...register("name")} 
            required
            disabled={loading}
            />
            {errors.name && (
            <p className={styles.errorMessage}>{errors.name.message}</p>)}

            <Input 
            label="Seu e-mail" 
            type="email" 
            placeholder="nome@email.com.br" 
            {...register("email")} 
            required
            disabled={loading}/>
            {errors.email && (
            <p className={styles.errorMessage}>{errors.email.message}</p>)}

            <Input 
            label="Seu telefone" 
            type="text" 
            placeholder="11987788546" 
            {...register("telephone")} 
            required
            disabled={loading}/>
            {errors.telephone && (
            <p className={styles.errorMessage}>{errors.telephone.message}</p>)}

            <InputPassword 
            label="Crie uma senha" 
            {...register("password")} 
            required
            placeholder="senha"
            disabled={loading}/>
            {errors.password && (
            <p className={styles.errorMessage}>{errors.password.message}</p>)}

            <InputPassword 
            label="Confirme sua senha"
            {...register("confirmPassword")} 
            required
            placeholder="confirmar senha"
            disabled={loading}/>
            {errors.confirmPassword && (
            <p className={styles.errorMessage}>{errors.confirmPassword.message}</p>)}  

            <div>
                <button type="submit" className="btn outline" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
                <Link className="link" to="/">voltar</Link>
            </div>
        </form>
    )
}