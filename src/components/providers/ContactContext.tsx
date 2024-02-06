import { createContext, useEffect, useState, ReactNode} from "react"
import { api } from "../../services/api"
import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Contact {
    id: string;
    name: string;
    email: string;
    telephone: string;
    userId: string;
  }

interface ContactFormData {
    id?: string;
    name: string;
    email: string;
    telephone: string;
}
  
interface ContactProviderProps {
    children: ReactNode;
  }
  
export interface ContactContextType {
    contactList: Contact[];
    editingContact?: Contact | null;
    createContact:(formdata: ContactFormData) => Promise<void>;
    deleteContact: (deletingId: any) => Promise<void>;
    setEditingContact?: React.Dispatch<React.SetStateAction<Contact | null>>
    editContact: (formData: ContactFormData) => Promise<void>;
}
  

export const ContactContext = createContext<ContactContextType>({
    contactList: [],
    createContact: async () => {},
    deleteContact: async () => {},
    editingContact: null,
    editContact: async () => {},
});

export const ContactProvider: React.FC<ContactProviderProps> = ({children}) => {

    const [contactList, setContactList] = useState<Contact[]>([])
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    const navigate = useNavigate()

    useEffect(() => {
        const getContact = async () => {
            try {
                const { data } = await api.get("/contacts", {})
                setContactList(data)
            } catch (error) {
                console.log(error)
            }
        }
        getContact()
    }, [])

    const createContact = async (formData: ContactFormData) => {

        try {
            const token = localStorage.getItem("@TOKEN")

            const newContact = {
                ...formData,
            }

            const { data } = await api.post("/contacts", newContact, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
             })
             setContactList(contactList => [...contactList, data])

             toast.success("Contato adicionado com sucesso!");

             navigate("/user");
   
            } catch (error) {
                console.log(error)
            }
    }
    
    const editContact = async (formData: ContactFormData) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            if (!editingContact) {
                return;
            }
            const { data } = await api.patch(`/contacts/${editingContact.id}`,formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            const newContactList = contactList.map((contact) =>
                contact.id === editingContact.id ? data : contact
        );
            setContactList(newContactList)

            setEditingContact(null)

            toast.success("Contato editado com sucesso!")

            navigate("/user");

        } catch (error) {
            console.log(error)
        }
    }

    const deleteContact = async (deletingId: any) => {
        const token = localStorage.getItem("@TOKEN")
        try {
            await api.delete(`/contacts/${deletingId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
             const newContactList = contactList.filter(contact => contact.id !== deletingId)
             toast.success("Contato excluido com sucesso!")
             setContactList(newContactList)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ContactContext.Provider value={{contactList, editingContact, createContact, deleteContact, setEditingContact, editContact}}>
            {children}
        </ContactContext.Provider>
    )
}
