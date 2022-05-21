import { useState } from "react";
import ButtonComponent from "../../core/ButtonComponent";

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
                        if (loading) return;
                        setLoading(true)
                    }} className={loading ? 'active' : ''}>
                        {loading ? 'ADDING TO CART...' : 'ADD TO CART'}
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default ItemProduct