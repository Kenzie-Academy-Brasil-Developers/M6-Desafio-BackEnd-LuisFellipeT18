import { Footer } from "../Footer"
import { Header } from "../Header"
import { User } from "../../../BackEnd/src/modules/users/entities/user.entity"
import React, { ReactNode } from 'react';

interface DefaultTemplateProps {
    children: ReactNode;
    user: User | null;
    userLogout: () => void;
  }

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ user, children, userLogout }) => {
    return (
        <>
            <Header user={user} userLogout={userLogout}/>
            {children}
            <Footer />
        </>
    )
}