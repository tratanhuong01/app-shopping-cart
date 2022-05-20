import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_URL, PAGE_HOME } from '../../constants/constants'
import { routes } from '../../routes/RouteWrapper'
import MenuItem from './MenuItem'

const Header = () => {
    //
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");
    //
    return (
        <header className="header">
            <div onClick={() => setShowMenu(true)} className="header__mobile">
                <i className="bx bx-menu"></i>
            </div>
            <div className="header__logo">
                <Link to={PAGE_HOME}>
                    <img src={LOGO_URL} alt="" />
                </Link>
            </div>
            <div className={`header__menu ${showMenu ? 'active' : ''}`}>
                <ul onClick={(event) => {

                }}>
                    {routes.map(route => <MenuItem route={route} key={route.id} setActive={setActive} active={active} />)}
                </ul>
            </div>
            <div className="header__right">
                <span className='bx bx-cart'></span>
                <span>CART</span>
                <span>0</span>
                <div>GET STARTED</div>
            </div>
            <div onClick={() => setShowMenu(false)} className={`header__overlay ${showMenu ? 'active' : ''}`}></div>
        </header>
    )
}

export default Header