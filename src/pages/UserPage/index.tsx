import { DefaultTemplate } from "../../components/DefaultTemplate"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"
import styles from "./style.module.scss"


interface UserPageProps {
    user: User | null;
    userLogout: () => void;
  }

export const UserPage: React.FC<UserPageProps> = ({ user, userLogout})=> {
    return(
        <DefaultTemplate user={user} userLogout={userLogout}>
            <main className={styles.userPage}>
                <div className="container">
                    <h1 className="title">User Page</h1>
                </div>
            </main>
        </DefaultTemplate>
    )
}