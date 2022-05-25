import { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Modal from "../components/Modal/Modal"
import { CartProvider } from "../contexts/CartContext/CartContext"
import { ModalProvider } from "../contexts/ModalContext/ModalContext"

type WrapperPageProps = {
    children: ReactNode
}

const WrapperPage = ({ children }: WrapperPageProps) => {
    return (
        <ModalProvider>
            <CartProvider>
                <Header />
                {children}
                <Footer />
                <Modal />
            </CartProvider>
        </ModalProvider>
    )
}

export default WrapperPage