import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { v4 } from 'uuid'
import { PAGE_ABOUT, PAGE_HOME } from '../constants/constants'
import { RouteProps } from '../interfaces/interfaces'
import Home from '../pages/Home'

export const routes: RouteProps[] = [
    {
        id: v4(),
        path: PAGE_HOME,
        name: "HOME",
        element: <Home />,
        exact: true,
        listChilren: [
            {
                id: v4(),
                name: "HOME 1",
                path: ""
            },
            {
                id: v4(),
                name: "HOME 2",
                path: ""
            },
            {
                id: v4(),
                name: "HOME 3",
                path: ""
            }
        ],
        hasChildren: true
    },
    {
        id: v4(),
        path: PAGE_ABOUT,
        name: "ABOUT",
        element: null,
        exact: true,
        hasChildren: false
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