import { useState } from 'react'
import HomeTitleTop from '../HomeTitleTop'

const AskQuestion = () => {
    return (
        <div className="ask-question">
            <HomeTitleTop type="Faq" title="Frequently Asked Questions" />
            <ItemAskQuestion />
            <ItemAskQuestion />
            <ItemAskQuestion />
            <ItemAskQuestion />
        </div>
    )
}

const ItemAskQuestion = () => {
    //
    const [active, setActive] = useState<boolean>(false);
    //
    return (
        <div onClick={() => setActive(!active)} className={`ask-question--item ${active ? 'active' : ''}`}>
            <div>
                <span>Can I choose my meals?</span>
                <span className='bx bx-chevron-right text-green'></span>
            </div>
            <div>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.
            </div>
        </div>
    )
}

export default AskQuestion