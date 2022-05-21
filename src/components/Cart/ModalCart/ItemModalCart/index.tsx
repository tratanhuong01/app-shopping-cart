import ButtonComponent from "../../../../core/ButtonComponent"

type ItemModalCartProps = {
    cart: {
        id: number
    },
    carts: {
        id: number
    }[],
    setCarts: (carts: {
        id: number
    }[]) => void
}

const ItemModalCart = ({ cart, carts, setCarts }: ItemModalCartProps) => {
    return (
        <div className="modal__cart--item">
            <img src="https://uploads-ssl.webflow.com/5f8e3d7830da5b5bc2d3fe53/5f8e4dd17964d92d26bc52bf_food_2_main.jpg" alt="" />
            <div>
                <p>Take-Out Style</p>
                <span>$ 1.99 USD</span>
                <ButtonComponent type="button" handleClick={() => {
                    setCarts([...carts].filter(dt => dt.id !== cart.id));
                }}>Remove</ButtonComponent>
            </div>
        </div>
    )
}

export default ItemModalCart