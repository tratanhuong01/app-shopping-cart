import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { v4 } from 'uuid'
import { PAGE_ABOUT, PAGE_CONTACT, PAGE_HOME, PAGE_SHOP } from '../constants/constants'
import { RouteProps } from '../interfaces/interfaces'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

export const routes: RouteProps[] = [
    {
        id: v4(),
        path: PAGE_HOME,
        name: "HOME",
        element: <Home />,
        exact: true,
        hasChildren: false,
        title: "Home",
    },
    {
        id: v4(),
        path: PAGE_SHOP,
        name: "SHOP",
        element: <Shop />,
        exact: true,
        hasChildren: false,
        title: "Shop"
    },
    {
        id: v4(),
        path: PAGE_ABOUT,
        name: "ABOUT",
        element: <About />,
        exact: true,
        hasChildren: false,
        title: "About"
    },
    {
        id: v4(),
        path: PAGE_CONTACT,
        name: "CONTACT",
        element: <Contact />,
        exact: true,
        hasChildren: false,
        title: "Contact"
    }
]

const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => <Route element={route.element} path={route.path} key={route.id} />)}
            </Routes>
        </BrowserRouter>
    )
}

export default RouteWrapper