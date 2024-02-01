import { LoginForm } from "../../components/forms/LoginForm"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"

interface HomePageProps {
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }


export const HomePage: React.FC<HomePageProps> = ({ setUser }) => {
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
              <LoginForm setUser={setUser}/>
            </div>
        </main>
    )
}