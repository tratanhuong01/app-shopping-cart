import { ReactNode } from "react"
import { Cart } from "../../interfaces/interfaces"

export interface CartValue {
    cart: CartState,
    addCart: (item: Cart) => void,
    deleteCart: (item: Cart) => void,
}

export type CartProps = {
    children: ReactNode
}

export type CartState = {
    list: Cart[],
}