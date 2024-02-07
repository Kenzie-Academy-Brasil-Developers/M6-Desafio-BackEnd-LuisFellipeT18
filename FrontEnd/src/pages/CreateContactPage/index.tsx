import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { CreateContactForm } from "../../components/forms/CreateContactForm"


export const CreateContactPage = () => {
    return (
        <DefaultTemplate>
            <main>
                <div className="container">
                    <Link to="/user" className="link"><MdArrowBack>voltar</MdArrowBack></Link>
                    <h1 className="title center">Adicione um contato</h1>
                    <CreateContactForm/>
                </div>
            </main>
        </DefaultTemplate>
    )
}