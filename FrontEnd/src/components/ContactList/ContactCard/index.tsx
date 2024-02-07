import { useContext } from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../providers/UserContext";
import { ContactContext } from "../../providers/ContactContext"
import style from "./style.module.scss"


interface ContactCardProps {
    contact: {
        id: string;
        name: string;
        email: string;
        telephone: string;
        userId: string;
      };
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact })=> {
    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const { deleteContact, setEditingContact } = useContext(ContactContext)

    

    const handleEditContact = () => {
        if (setEditingContact) {
          setEditingContact(contact);
        }
        navigate("/contacts/edit")
      };
    
    const isUserContact = user.id === contact.userId;

    return(
            <li className={style.cardBox}>
                <div className={style.cards}>
                    <p className="paragraph orange bold">{contact.name}</p>
                    <p className="paragraph white">{contact.email}</p>
                    <p className="paragraph white">{contact.telephone}</p>
                </div>
                <div>
                    {isUserContact && (
                        <>
                            <button className="button_contact" onClick={handleEditContact} title="Editar contato" arial-label="edit">
                                <MdOutlineEdit/>
                            </button>
                            <button className="button_contact" onClick={() => deleteContact(contact.id)} title="Remover contato" arial-label="delete">
                            <MdDeleteOutline/>
                            </button>
                        </>
                    )}
                </div>
            </li>
    )
}
