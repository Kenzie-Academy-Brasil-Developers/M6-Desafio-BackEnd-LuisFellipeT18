import { ContactList } from "../../components/ScrapList"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./style.module.scss"



export const UserPage = () => {
    return(
        <DefaultTemplate>
            <main className={styles.userPage}>
                <div className="container">
                    <ContactList/>
                </div>
            </main>
        </DefaultTemplate>
    )
}