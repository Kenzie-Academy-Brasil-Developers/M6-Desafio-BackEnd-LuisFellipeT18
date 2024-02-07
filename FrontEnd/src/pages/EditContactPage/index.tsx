import {  Navigate, useNavigate } from "react-router-dom"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { useContext } from "react"
import { MdArrowBack } from "react-icons/md"
import { ContactContext } from "../../components/providers/ContactContext"
import { EditContactForm } from "../../components/forms/EditContactForm"

export const EditContactPage = () => {
    const { editingContact, setEditingContact } = useContext(ContactContext);

    const navigate = useNavigate()

    const handleGoBack = () => {
        if (setEditingContact) {
          setEditingContact(null);
          navigate("/user");
        }
      };


    return editingContact ? (
    <DefaultTemplate>
        <main>
            <div className="container">
                <button onClick={handleGoBack} className="btn outline">
                    <MdArrowBack /> voltar
                    </button>
                <h1 className="title center">Altere um contato</h1>
                <EditContactForm />
            </div>
        </main>
    </DefaultTemplate>
    ) : <Navigate to="/user"/>
}