import { Link } from "react-router-dom"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"
import Logo from "../../assets/logo2.png"
import styles from "./style.module.scss"

interface HeaderProps {
    user: User | null;
    userLogout: () => void;
  }



export const Header: React.FC<HeaderProps> = ({ user, userLogout}) => {
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
                    <button className="btn outline" onClick={() => userLogout}>Sair</button>
                    <Link to="/" className="link">Home</Link>                 
                </div>
               </nav>
             </div>
        </header>
    )
} 