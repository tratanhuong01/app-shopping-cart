import { ReactNode } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Modal from "../components/Modal/Modal"
import { ModalProvider } from "../contexts/ModalContext/ModalContext"

type WrapperPageProps = {
    children: ReactNode
}

const WrapperPage = ({ children }: WrapperPageProps) => {
    return (
        <ModalProvider>
            <Header />
            {children}
            <Footer />
            <Modal />
        </ModalProvider>
    )
}

export default WrapperPage