import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextData {
    isOpenModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextData>(
    {} as ModalContextData
);

export default function ClientProvider ({children}: ModalProviderProps) {

    const [isOpenModal, setIsOpenModal] = useState(false);

    function openModal() {
        setIsOpenModal(true);
        console.log("openModal");
    }
    function closeModal() {
        setIsOpenModal(false);
    }

    return(
        <ModalContext.Provider value={{isOpenModal, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}


export function useModal(){
    const context= useContext(ModalContext);

    return context
}