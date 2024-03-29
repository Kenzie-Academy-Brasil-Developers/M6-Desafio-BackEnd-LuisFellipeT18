import { RegisterForm } from "../../components/forms/RegisterForm"
import pageStyles from "../../styles/modules/pageBox.module.scss"
import style from "./style.module.scss"

export const RegisterPage = () => {
    return(
        <main className={pageStyles.pageBox}>
            <div className="container sm">
                <div className={style.flexBox}>
                    <h1 className="title center">Cadastre-se</h1>
                    <RegisterForm/>
                </div>
            </div>
        </main>
    )
}