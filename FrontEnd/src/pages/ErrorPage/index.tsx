import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        }, 3000)
    })
    return(
        <main>
            <h1>Error: 404</h1>
            <p>Não foi possivel encontrar a página!</p>
        </main>
    )
}