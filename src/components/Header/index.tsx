import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL, PAGE_HOME } from '../../constants/constants'
import { CartValue } from '../../contexts/CartContext/@types.cart'
import { CartContext } from '../../contexts/CartContext/CartContext'
import { ModalValue } from '../../contexts/ModalContext/@types.modal'
import { ModalContext } from '../../contexts/ModalContext/ModalContext'
import { routes } from '../../routes/RouteWrapper'
import ModalCart from '../Cart/ModalCart'
import { ItemWaveHero } from '../Hero'
import MenuItem from './MenuItem'

const Header = () => {
    //
    const { modalUpdateState } = useContext(ModalContext) as ModalValue;
    const { cart } = useContext(CartContext) as CartValue
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");
    const location = useLocation();
    useEffect(() => {
        //
        const index: number = routes.findIndex(dt => location.pathname.indexOf(dt.path) !== -1 && dt.path !== "/");
        if (location.pathname === PAGE_HOME) {
            setActive(routes[0].id)
        }
        else {
            if (index !== -1) {
                setActive(routes[index].id);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //
    return (
        <>
            <header className="header">
                <div onClick={() => setShowMenu(true)} className={`header__mobile ${showMenu ? 'active' : ''}`}>
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
                    <ItemWaveHero isTop={true} />
                </div>
                <div className="header__right">
                    <span onClick={() => modalUpdateState(false, <ModalCart />)} className='bx bx-cart'></span>
                    <span onClick={() => modalUpdateState(false, <ModalCart />)}> CART</span>
                    <span>{cart.list.length}</span>
                    <div>GET STARTED</div>
                </div>

            </header>
            <div onClick={() => setShowMenu(false)} className={`header__overlay ${showMenu ? 'active' : ''}`}></div>
        </>
    )
}

export default Header