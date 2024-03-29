import { useContext } from "react";
import { ContactList } from "../../components/ContactList"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./style.module.scss"
import { ContactContext } from "../../components/providers/ContactContext";



export const UserPage = () => {
    const { contactList } = useContext(ContactContext);

    return(
        <DefaultTemplate>
            <main className={styles.userPage}>
                <div className="container">
                    <ContactList contactList={contactList}/>
                </div>
            </main>
        </DefaultTemplate>
    )
}