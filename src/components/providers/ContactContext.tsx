import { createContext, useEffect, useState, ReactNode } from "react"
import { api } from "../../services/api"
import React from 'react';

interface ContactProviderProps {
    children: ReactNode;
  }

export const ContactContext = createContext({})

export const ContactProvider: React.FC<ContactProviderProps> = ({children}) => {
    const [contactList, setContactList] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        const getContact = async () => {
            try {
                const { data } = await api.get("/contacts", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setContactList(data)
            } catch (error) {
                console.log(error)
            }
        }
        getContact()
    }, [])


    return (
        <ContactContext.Provider value={{contactList}}>
            {children}
        </ContactContext.Provider>
    )
}
