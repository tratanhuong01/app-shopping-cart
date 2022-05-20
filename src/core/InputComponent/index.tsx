import { useState } from "react"

type InputProps = {
    placeholder?: string,
    type: string,
    classContainer?: string,
    classInput?: string,
    error?: boolean,
    icon?: string,
    errorDetail?: { message: "" },
    style?: {}
}

const InputComponent = ({ placeholder, type, classContainer, classInput, error, errorDetail,
    icon, style }: InputProps) => {
    //
    const [show, setShow] = useState<boolean>(false);
    //
    return (
        <>
            <div className={`input-container ${icon ? `icon` : ''} ${classContainer || ''}`} >
                {icon && <span className={`${icon} icon-input`}></span>}
                <input type={type === "password" ? show ? "text" : "password" : type} style={style}
                    placeholder={placeholder} className={`${classInput || ''}`} />
                {type === "password" &&
                    <span onClick={() => setShow(!show)} className={`eye-input bx bx-${show ? 'show' : 'hide'}`}></span>}
            </div>
            {error && errorDetail && <p className="error-input">{errorDetail.message}</p>}
        </>
    )
}

export default InputComponent