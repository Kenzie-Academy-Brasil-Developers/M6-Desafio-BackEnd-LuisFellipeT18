import { LoginForm } from "../../components/forms/LoginForm"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"
import Logo from "../../assets/logo2.png"
import style from "./styles.module.scss"

interface HomePageProps {
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
  }


export const HomePage: React.FC<HomePageProps> = ({ setUser }) => {
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
              <div className={style.flexBox}>
                 <img className={style.imgLogo}src={Logo} alt="Logo Contact Service" />
                  <LoginForm setUser={setUser}/>
              </div>         
            </div>
        </main>
    )
}