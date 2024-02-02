import { Link } from "react-router-dom"
import { ContactCard } from "./ContactCard"
import { useContext } from "react"
import { ContactContext } from "../providers/ContactContext"

interface ContactListProps {
    contactList: {
      id: string;
      name: string;
      email: string;
      telephone: string;
    }[];
  }

  

export const ContactList: React.FC<ContactListProps>  = ({ contactList }) => {
    const { contactList: contextContactList } = useContext(ContactContext);
    return (
        <div>
            <div>
                <h1 className="title">Lista de Contatos</h1>
                <Link className="btn solid" to="/" >Cadastrar contato</Link>
            </div>
            <ul>
                {(contextContactList || contactList).map((contact) => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}