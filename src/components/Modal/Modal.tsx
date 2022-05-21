import { useContext } from 'react'
import { ModalValue } from '../../contexts/ModalContext/@types.modal';
import { ModalContext } from '../../contexts/ModalContext/ModalContext';

const Modal = () => {
    //
    const { modal: { loading, data }, modalUpdateState } = useContext(ModalContext) as ModalValue;
    //
    return (
        <>
            <div className={`modal ${data ? 'active' : ''}`}>
                <div className="modal__container">
                    {data}
                </div>
                {loading && <div className="modal__loading"></div>}
            </div>
            <div onClick={() => {
                modalUpdateState(false, null);
            }} className={`modal__overlay ${data ? 'active' : ''}`}></div>
        </>
    )
}

export default Modal