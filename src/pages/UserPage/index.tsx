import { DefaultTemplate } from "../../components/DefaultTemplate"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"

interface UserPageProps {
    user: User | null;
    userLogout: () => void;
  }

export const UserPage: React.FC<UserPageProps> = ({ user, userLogout })=> {
    return(
        <DefaultTemplate user={user} userLogout={userLogout}>
            <main>
                <div className="container">
                    <h1 >User Page</h1>
                </div>
            </main>
        </DefaultTemplate>
    )
}