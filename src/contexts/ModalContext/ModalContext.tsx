import { createContext, ReactNode, useState } from "react";
import { ModalProps, ModalState, ModalValue } from "./@types.modal";


export const ModalContext = createContext<ModalValue | null>(null);

export const ModalProvider = ({ children }: ModalProps) => {
    //
    const [modal, setModal] = useState<ModalState>({
        loading: false,
        data: null
    });
    const modalUpdateState = (loading: boolean, data: null | ReactNode): void => {
        setModal({
            ...modal, data, loading,
        })
    }
    //
    return (
        <ModalContext.Provider value={{
            modal,
            modalUpdateState,
        }}>
            {children}
        </ModalContext.Provider>
    )
}