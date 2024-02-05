import { useContext } from "react";
import { Input } from "../Input"
import { SubmitHandler, useForm} from "react-hook-form"
import { ContactContext } from "../../providers/ContactContext";

interface FormData {
    id: string;
    name: string;
    email: string;
    telephone: string;
}


export const CreateContactForm = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const contactContext = useContext(ContactContext);

    if (!contactContext) {
        throw new Error("useCreateContactForm must be used within a ContactProvider");
    }

    const { createContact } = contactContext;


    const submit: SubmitHandler<FormData> = async (formData) => {
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("telephone", formData.telephone);
    
        createContact(formData);
    };
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
    
            <button type="submit" className="btn outline" >Criar</button>

        </form>
    )
}
