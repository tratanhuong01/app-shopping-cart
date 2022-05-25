import { useContext, useState } from "react";
import { v4 } from "uuid";
import { CartValue } from "../../contexts/CartContext/@types.cart";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { ModalValue } from "../../contexts/ModalContext/@types.modal";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import ButtonComponent from "../../core/ButtonComponent";
import ModalCart from "../Cart/ModalCart";

type ItemProductProps = {
    product: {
        image: string,
        name: string,
        price: string,
        sale?: string,
        description: string,
    }
};

const ItemProduct = ({ product }: ItemProductProps) => {
    //
    const [loading, setLoading] = useState<boolean>(false);
    const { modalUpdateState } = useContext(ModalContext) as ModalValue;
    const { addCart } = useContext(CartContext) as CartValue;
    //
    return (
        <div className="item-product">
            <div>
                <div className="item-product__image">
                    <div className="img-wrap">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="item-product__content">
                    <p className="item-product__name">
                        {product.name}
                    </p>
                    <div className="item-product__price">
                        <span>{product.price}</span>
                        {product.sale && <span>{product.sale}</span>}
                    </div>
                    <p className="item-product__description">
                        {product.description}
                    </p>
                    <ButtonComponent type="button" handleClick={() => {
                        let timeOut: any;
                        clearTimeout(timeOut);
                        if (loading) return;
                        setLoading(true)
                        timeOut = setTimeout(() => {
                            addCart({ id: v4() });
                            modalUpdateState(false, <ModalCart />);
                            setLoading(false);
                            clearTimeout(timeOut);
                        }, 500);
                    }} className={loading ? 'active' : ''}>
                        {loading ? 'ADDING TO CART...' : 'ADD TO CART'}
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct