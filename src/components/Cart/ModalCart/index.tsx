import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_SHOP } from "../../../constants/constants";
import ButtonComponent from "../../../core/ButtonComponent";
import ModalWrapper from "../../Modal/ModalWrapper"
import ItemModalCart from "./ItemModalCart";

const ModalCart = () => {
    //
    const navigate = useNavigate();
    const [carts, setCarts] = useState([{ id: 1 }, { id: 2 }]);
    //
    return (
        <ModalWrapper classContainer="modal__cart" title="Your cart">
            {carts.length <= 0 ? <div className="modal__cart--empty">
                <p>There are not items in your cart</p>
                <ButtonComponent type="button" className="button-orange" handleClick={() => {
                    navigate(PAGE_SHOP)
                }}>
                    VISIT SHOP
                </ButtonComponent>
            </div> :
                <>
                    <div className="modal__cart--list">
                        {carts.map(cart => <ItemModalCart carts={carts} cart={cart} setCarts={setCarts} key={cart.id} />)}
                    </div>
                    <div className="modal__cart--footer">
                        <ButtonComponent type="button" className="button-green">Continue to checkout</ButtonComponent>
                    </div>
                </>}
        </ModalWrapper>
    )
}

export default ModalCart