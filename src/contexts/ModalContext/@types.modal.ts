import { ReactNode } from "react"

export type ModalProps = {
    children: ReactNode
}

export interface ModalState {
    loading: boolean,
    data: null | ReactNode
}

export interface ModalValue {
    modal: ModalState,
    modalUpdateState: (loading: boolean, data: null | ReactNode) => void
}
