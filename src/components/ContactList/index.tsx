import { Link } from "react-router-dom"
import { ContactCard } from "./ContactCard"
import { useContext } from "react"
import { ContactContext } from "../providers/ContactContext"
import { UserContext } from "../providers/UserContext";

interface ContactListProps {
    contactList: {
      id: string;
      name: string;
      email: string;
      telephone: string;
      userId: string;
    }[];
  }

  

export const ContactList: React.FC<ContactListProps>  = ({ contactList }) => {
    const { contactList: contextContactList } = useContext(ContactContext) || {};
    const { user } = useContext(UserContext) || { id: "" };
    const displayedContactList = (contextContactList || contactList || []).filter(
        (contact) => contact.userId === user.id)
    return (
        <div>
            <div>
                <h1 className="title">Lista de Contatos</h1>
                <Link className="btn solid" to="/contacts" >Cadastrar contato</Link>
            </div>
            <ul>
            {displayedContactList.map((contact: any) => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}