import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_SHOP } from "../../../constants/constants";
import { CartValue } from "../../../contexts/CartContext/@types.cart";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import ButtonComponent from "../../../core/ButtonComponent";
import ModalWrapper from "../../Modal/ModalWrapper"
import ItemModalCart from "./ItemModalCart";

const ModalCart = () => {
    //
    const navigate = useNavigate();
    const { cart } = useContext(CartContext) as CartValue;
    //
    return (
        <ModalWrapper classContainer="modal__cart" title="Your cart">
            {cart.list.length <= 0 ? <div className="modal__cart--empty">
                <p>There are not items in your cart</p>
                <ButtonComponent type="button" className="button-orange" handleClick={() => {
                    navigate(PAGE_SHOP)
                }}>
                    VISIT SHOP
                </ButtonComponent>
            </div> :
                <>
                    <div className="modal__cart--list">
                        {cart.list.map(item => <ItemModalCart item={item} key={item.id} />)}
                    </div>
                    <div className="modal__cart--footer">
                        <ButtonComponent type="button" className="button-green">Continue to checkout</ButtonComponent>
                    </div>
                </>}
        </ModalWrapper>
    )
}

export default ModalCart