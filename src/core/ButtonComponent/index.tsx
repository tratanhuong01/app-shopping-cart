import { ReactNode } from "react"
import { Link } from "react-router-dom"

type ButtonProps = {
    type: "button" | "submit" | "reset",
    children?: ReactNode,
    link?: boolean,
    path?: string,
    handleClick?: Function,
    className?: string
}

const ButtonComponent = ({ type, children, link, path, handleClick, className }: ButtonProps) => {
    return (
        link && path ? <Link to={path} className={`${className || ''}`}>
            {children}
        </Link> : <button onClick={() => {
            if (typeof handleClick === "function") {
                handleClick();
            }
        }} type={type} className={`${className || ''}`}>{children}</button>
    )
}

export default ButtonComponent