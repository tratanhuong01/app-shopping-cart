import { Link } from 'react-router-dom'
import { PAGE_HOME } from '../../constants/constants'
import ButtonComponent from '../../core/ButtonComponent'
import InputComponent from '../../core/InputComponent'
import { ItemWaveHero } from '../Hero'
import AskQuestion from '../HomeItem/AskQuestion'

const Footer = () => {
    return (
        <>
            <AskQuestion />
            <div className="near__footer">
                <ItemWaveHero isTop />
                <div className='near__footer--container'>
                    <h2>Join <span>our</span> newsletter</h2>
                    <div>
                        <InputComponent type='text' placeholder='Enter your email' />
                        <ButtonComponent type='button'>
                            SUBMIT
                        </ButtonComponent>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <ItemWaveHero isTop />
                <div className="wrapper footer__wrapper">
                    <div className="footer__left">
                        <Link to={PAGE_HOME}>
                            <img src="https://assets.website-files.com/5f8777f972356e39b046d89f/5f8e08d12a17a346370a87ec_logo_footer.svg" alt="" />
                        </Link>
                        <span>Powered by Webflow</span>
                    </div>
                    <ul className="footer__right">
                        <li>Style Guide</li>
                        <li>ChangeLog</li>
                        <li>Image Licensing</li>
                        <li>
                            <ul>
                                <li className='bx bxl-facebook'></li>
                                <li className='bx bxl-twitter'></li>
                                <li className='bx bxl-instagram'></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer