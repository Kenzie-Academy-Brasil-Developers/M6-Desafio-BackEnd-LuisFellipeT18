import { Link } from "react-router-dom"
import { ContactCard } from "./ContactCard"
import { useContext } from "react"
import { ContactContext } from "../providers/ContactContext"
import { UserContext } from "../providers/UserContext";
import style from "./styles.module.scss"

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
        <div className={style.cardsBox}>
            <div>
                <h1 className="title">Lista de Contatos</h1>
                <Link className="btn outline" to="/contacts" >Cadastrar</Link>
            </div>
            <ul className={style.listBox}>
            {displayedContactList.map((contact: any) => (
                    <ContactCard key={contact.id} contact={contact}/>
                ))}
            </ul>
        </div>
    )
}