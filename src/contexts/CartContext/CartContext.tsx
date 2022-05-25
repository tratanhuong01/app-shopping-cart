import { createContext, useState } from "react";
import { Cart } from "../../interfaces/interfaces";
import { CartProps, CartState, CartValue } from "./@types.cart";

export const CartContext = createContext<CartValue | null>(null);

export const CartProvider = (props: CartProps) => {
    //
    const [cart, setCart] = useState<CartState>({
        list: []
    });
    const addCart = (item: Cart) => {
        const index = cart.list.findIndex(dt => dt.id === item.id);
        if (index !== -1) {
        }
        else {
            setCart({ ...cart, list: [...cart.list, item] });
        }
    }
    const deleteCart = (item: Cart) => {
        setCart({ ...cart, list: [...cart.list].filter(dt => dt.id !== item.id) });
    }
    //
    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            deleteCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}