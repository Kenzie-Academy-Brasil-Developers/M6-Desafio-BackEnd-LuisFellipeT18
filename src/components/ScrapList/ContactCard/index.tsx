import { MdDeleteOutline, MdOutlineEdit, MdOutlineVisibility } from "react-icons/md"
import { Link } from "react-router-dom"

interface Contact {
    id: string; 
    name: string;
    email: string;
    telephone: string;
  }

interface ContactCardProps {
    contact: Contact;
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact })=> {
    return(    
            <li>
                <div>
                    <p className="paragraph">{contact.name}</p>
                    <p className="paragraph">{contact.email}</p>
                    <p className="paragraph">{contact.telephone}</p>
                </div>
                <div>
                    <button title="Editar contato" arial-label="edit">
                        <MdOutlineEdit/>
                    </button>
                    <button title="Remover contato" arial-label="delete">
                        <MdDeleteOutline/>
                    </button>
                    <Link to="" title="Visualizar contato" arial-label="view">
                        <MdOutlineVisibility/>
                    </Link>
                </div>
            </li>
    )
}
