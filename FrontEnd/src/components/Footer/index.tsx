import styles from "./style.module.scss"
import Logo from "../../assets/Logo3.png"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.flexBox}>
                    <img src={Logo} alt="Logo Contact Service"/>
                    <p className="paragraph white">
                    &copy; Todos os direitos reservados -  Luis Fellipe da Silva Ferraz Garcia
                    </p>
                </div>
            </div>
        </footer>
    )
}