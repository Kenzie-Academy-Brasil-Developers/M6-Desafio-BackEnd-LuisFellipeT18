import {forwardRef} from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({ label, ...rest}, ref) => {

    return (
        <div className={styles.inputBox}>
            <label className="label">{label}</label>
            <input ref={ref} {...rest}/>

        </div>
    )
})

