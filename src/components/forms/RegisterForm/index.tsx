import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();


    const submit = (formData) => {
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Seu nome" type="text" placeholder="exemplo" {...register("name")} required/>
            <Input label="Seu e-mail" type="email" placeholder="nome@email.com.br" {...register("email")} required/>
            <InputPassword label="Crie uma senha" {...register("password")} required/>

            <div>
                <Link to="/">voltar</Link>
                <button>Cadastre-se</button>
            </div>
        </form>
    )
}