import { useContext } from "react";
import { Input } from "../Input"
import { SubmitHandler, useForm, } from "react-hook-form"
import { UserContext } from "../../providers/UserContext";

interface FormData {
    name: string;
    email: string;
    telephone: string;
}


export const EditUserForm = () => {
    const {editingUser, userEdit} = useContext(UserContext);
    const {register, handleSubmit} = useForm<FormData>({
        defaultValues: {
          name: editingUser?.name || "",
          email: editingUser?.email || "",
          telephone: editingUser?.telephone || "",
        },
      });


    const submit: SubmitHandler<FormData> = (formData) => {
        

        if (editingUser) {
            userEdit(editingUser.id, formData);
        }
        setTimeout(() => {
            window.location.href = '/user';
          }, 2000);

    };
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
            label="Novo usuário" 
            type="text" 
            placeholder="Maria Silva" 
            {...register("name")} 
            required/>
            
            <Input
            label="Novo e-mail do usuário" 
            type="email" 
            placeholder="usuario@mail.com" 
            {...register("email")} 
            required/>
            

            <Input
            label="Novo telefone do usuário" 
            type="text" 
            placeholder="1133339999" 
            {...register("telephone")} 
            required/>
    
            <button type="submit" className="btn outline" >Editar Usuario</button>

        </form>
    )
}
