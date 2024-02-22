import { useContext } from "react";
import { Input } from "../Input"
import { SubmitHandler, useForm} from "react-hook-form"
import { ContactContext } from "../../providers/ContactContext";
import { toast } from "react-toastify";


interface FormData {
    id: string;
    name: string;
    email: string;
    telephone: string;
}


export const CreateContactForm = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const contactContext = useContext(ContactContext);
    const { createContact } = contactContext;
    

    if (!contactContext) {
        throw new Error("useCreateContactForm must be used within a ContactProvider");
    }

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        try {
            await createContact(formData);
            toast.success("Contato criado com sucesso")
            setTimeout(() => {
                window.location.href = '/user';
              }, 2000);
        } catch (error) {
            console.error(error);
        } 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div className="buttonCreate">
                <button type="submit" className="btn outline" >
                Criar  
                </button>
            </div>
            
        </form>
    )
}
