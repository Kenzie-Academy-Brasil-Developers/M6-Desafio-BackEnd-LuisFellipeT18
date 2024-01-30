import { Footer } from "../Footer"
import { Header } from "../Header"
import { ReactNode } from "react";

interface DefaultTemplateProps {
    children: ReactNode;
  }

export const DefaultTemplate = ({children}: DefaultTemplateProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}