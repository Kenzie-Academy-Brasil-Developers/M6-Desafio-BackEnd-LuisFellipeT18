import {forwardRef, InputHTMLAttributes, Ref} from "react"
import styles from "./style.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
  }

  export const Input = forwardRef(
    ({ label, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
        <div className={styles.inputBox}>
            <label className={styles.labelContact}>{label}</label>
            <input ref={ref} {...rest}/>
        </div>
    )
})

