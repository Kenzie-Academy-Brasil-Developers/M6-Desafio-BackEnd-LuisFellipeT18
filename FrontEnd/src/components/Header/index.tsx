import Logo from "../../assets/logo2.png"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../providers/UserContext"



export const Header = () => {
  const {user, userLogout} = useContext(UserContext)
    return (
        <header>
            <div className="container">
              <nav className={styles.flexBox}>
                <img src={Logo} alt="Logo Contact Service"/>
                <div>
                  <div>
                    <p className="paragraph">{user?.name}</p>
                    <p className="paragraph">{user?.email}</p>
                  </div>
                    <button className="btn outline" onClick={() => userLogout()}>Sair</button>                 
                </div>
               </nav>
             </div>
        </header>
    )
} 