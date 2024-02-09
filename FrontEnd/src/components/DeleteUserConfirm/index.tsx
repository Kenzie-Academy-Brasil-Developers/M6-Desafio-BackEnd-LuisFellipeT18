import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import style from "./styles.module.scss"
import { toast } from "react-toastify";

interface DeleteUserConfirmProps {
    onConfirm: () => void;
}

export const DeleteUserConfirm: React.FC<DeleteUserConfirmProps> = ({ onConfirm }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleConfirm = async () => {
      try {
        await onConfirm();
        setIsVisible(false);  
        toast.success('Usuário excluído com sucesso!');
        setTimeout(() => {
            window.location.href = '/'; 
        }, 2000);
    } catch (error) {
        console.error(error);
    }
};
  
    return (
        <>
            <button className="button_contact" onClick={() => setIsVisible(true)} title="Remover usuário" arial-label="delete">
                <MdDeleteOutline/>
            </button>
              <div>
                {isVisible && (
                    <span className={style.deleteComfirm}>
                        Tem certeza que deseja excluir o Contato?{' '}
                <button className="btn outline" onClick={handleConfirm}>Sim</button>{' '}
                <button className="btn outline" onClick={() => setIsVisible(false)}>Não</button>
            </span>
        )}
      </div>
        </>
    );
  };
  