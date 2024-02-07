import { useContext } from "react";
import { Input } from "../Input"
import { SubmitHandler, useForm, } from "react-hook-form"
import { ContactContext } from "../../providers/ContactContext";

interface FormData {
    name: string;
    email: string;
    telephone: string;
}


export const EditContactForm = () => {
    const {editingContact,  editContact} = useContext(ContactContext);

    const {register, handleSubmit} = useForm<FormData>({
        defaultValues: {
          name: editingContact?.name || "",
          email: editingContact?.email || "",
          telephone: editingContact?.telephone || "",
        },
      });


    const submit : SubmitHandler<FormData> = (formData) => {
        editContact(formData)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
            label="Nome do contato" 
            type="text" 
            placeholder="Empresa, Pessoa, etc" 
            {...register("name")} 
            required/>
            
            <Input
            label="Email do contato" 
            type="email" 
            placeholder="contato@mail.com" 
            {...register("email")} 
            required/>
            

            <Input
            label="Telefone do Contato" 
            type="text" 
            placeholder="1199776655" 
            {...register("telephone")} 
            required/>
    
            <button type="submit" className="btn outline" >Editar Contato</button>

        </form>
    )
}
