import { Footer } from "../Footer"
import { Header } from "../Header"
import React, { ReactNode } from 'react';

interface DefaultTemplateProps {
    children: ReactNode;
  }

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({children}) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}