import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import style from "./style.module.scss"

interface DeleteUserConfirmProps {
    onConfirm: () => void;
}

export const DeleteUserConfirm: React.FC<DeleteUserConfirmProps> = ({ onConfirm }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleConfirm = () => {
      onConfirm();
      setIsVisible(false);
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
  