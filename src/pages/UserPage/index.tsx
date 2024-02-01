import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./style.module.scss"



export const UserPage = () => {
    return(
        <DefaultTemplate>
            <main className={styles.userPage}>
                <div className="container">
                    <h1 className="title">User Page</h1>
                </div>
            </main>
        </DefaultTemplate>
    )
}