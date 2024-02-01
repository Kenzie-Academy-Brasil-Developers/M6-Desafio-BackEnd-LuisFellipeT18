import { LoginForm } from "../../components/forms/LoginForm"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import Logo from "../../assets/logo2.png"
import style from "./styles.module.scss"




export const HomePage = () => {
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
              <div className={style.flexBox}>
                 <img className={style.imgLogo}src={Logo} alt="Logo Contact Service" />
                  <LoginForm/>
              </div>         
            </div>
        </main>
    )
}