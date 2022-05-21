import { ReactNode, useContext } from "react"
import { ModalValue } from "../../contexts/ModalContext/@types.modal"
import { ModalContext } from "../../contexts/ModalContext/ModalContext"

type ModalWrapperProps = {
    classContainer?: string,
    children: ReactNode,
    title?: string
}

const ModalWrapper = ({ classContainer, title, children }: ModalWrapperProps) => {
    //
    const { modal: { data }, modalUpdateState } = useContext(ModalContext) as ModalValue;
    //
    return (
        <div className={data ? (classContainer || '') : 'hidden'}>
            {title && <div className="modal__container--header">
                <h2>{title}</h2>
            </div>}
            {data && <span onClick={() => {
                modalUpdateState(false, null);
            }} className="bx bx-x modal__close"></span>}
            <div className="modal__container--body">
                {children}
            </div>
        </div>
    )
}

export default ModalWrapper