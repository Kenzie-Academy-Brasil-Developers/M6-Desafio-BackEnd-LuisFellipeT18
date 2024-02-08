import {  Navigate, useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { useContext } from "react"
import { MdArrowBack } from "react-icons/md"
import { UserContext } from "../../components/providers/UserContext"
import { EditUserForm } from "../../components/forms/EditUserForm"

export const EditUserPage = () => {
    const { editingUser, setEditingUser } = useContext(UserContext);

    const navigate = useNavigate()

    const handleGoBack = () => {
        if (setEditingUser) {
          setEditingUser(null);
          navigate("/user");
        }
      };


    return editingUser ? (
    <DefaultTemplate>
        <main>
            <div className="container">
                <button onClick={handleGoBack} className="btn outline">
                    <MdArrowBack /> voltar
                    </button>
                <h1 className="title center">Altere o usuário</h1>
                <EditUserForm />
            </div>
        </main>
    </DefaultTemplate>
    ) : <Navigate to="/user"/>
}