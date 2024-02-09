import Logo from "../../assets/logo2.png"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../providers/UserContext"
import { MdOutlineEdit } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { DeleteUserConfirm } from "../DeleteUserConfirm"



export const Header = () => {
  const {user, userLogout, userDelete, setEditingUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleEditUser = () => {
        if (setEditingUser) {
          setEditingUser(user);
        }
        
        navigate("/user/edit")
      };
  
  const handleDeleteUser = async () => {
    try {
      await userDelete(user.id);
      } catch (error) {
        console.log(error)
      }
    };
  
    return (
        <header>
            <div className="container">
              <nav className={styles.flexBox}>
                <img src={Logo} alt="Logo Contact Service"/>
                <div>
                  <div>
                    <p className="paragraph">{user?.name}</p>
                    <p className="paragraph">{user?.email}</p>
                    <div>
                        <button className="button_contact" onClick={handleEditUser} title="Editar usuário" arial-label="edit">
                            <MdOutlineEdit/>
                        </button>
                       <DeleteUserConfirm onConfirm={handleDeleteUser} />
                    </div>
                  </div>
                    <button className="btn outline" onClick={() => userLogout()}>Sair</button>                 
                </div>
               </nav>
             </div>
        </header>
    )
} 