import {forwardRef, InputHTMLAttributes, Ref, useState} from "react"
import styles from "./style.module.scss"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

interface InputPasswordProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label: string;
  }

export const InputPassword = forwardRef(
    ({ label, ...rest }: InputPasswordProps, ref: Ref<HTMLInputElement>) => {
      const [isHidden, setIsHidden] = useState(true);
      const toggleVisibility = () => {
        setIsHidden(!isHidden)
      };

    return (
        <div className={styles.inputBox}>
            <label className="label">{label}</label>
            <div className={styles.inputGrid}>
            <input type={isHidden ? "password" : "text"} ref={ref} {...rest}/>
            <button type="button" onClick={toggleVisibility}>
                {isHidden ? <MdVisibilityOff /> : <MdVisibility />}
            </button>
            </div>

        </div>  
    )
})