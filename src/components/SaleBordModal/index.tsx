import styles from './styles.module.sass';
import ReactModal from 'react-modal';
import { useModal } from '../../context/useModal';

export function SaleBoardModal() {
    const{isOpenModal, closeModal} = useModal();
    return (
        <>
            <ReactModal 
            isOpen={isOpenModal} 
            onRequestClose={() => {}}
            >
                <h1 className={styles.title}>Ola mundo!</h1>
                <button onClick={closeModal}>A</button>
            </ReactModal>
        </>
    )
}