import { Link } from "react-router-dom"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"

interface HeaderProps {
    user: User | null;
    userLogout: () => void;
  }



export const Header: React.FC<HeaderProps> = ({ user, userLogout}) => {
    return (
        <header>
            <div className="container">
              <nav>
                <div>                 
                    <Link to="/">Home</Link>                 
                </div>
                <div>
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                </div>
                <button onClick={() => userLogout}>Sair</button>
               </nav>
             </div>
        </header>
    )
} 