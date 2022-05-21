import { useNavigate } from "react-router-dom"
import { RouteProps } from "../../../interfaces/interfaces"

type Props = {
    route: RouteProps,
    active: string,
    setActive: Function
}

const MenuItem = ({ route, active, setActive }: Props) => {
    //
    const navigate = useNavigate()
    //
    return (
        <li className={active === route.id ? 'active' : ''}>
            <div>
                <span onClick={() => {
                    setActive(!active ? route.id : active !== route.id ? route.id : -1);
                    if (!route.hasChildren) navigate(route.path);
                }}>{route.name}</span>
                {route.hasChildren && <i className="bx bx-chevron-down"></i>}
            </div>
            {route.hasChildren &&
                <ul className={active === route.id ? 'active' : ''}>
                    {route.listChilren?.map(item => <li key={item.id}>
                        <div>
                            {item.name}
                        </div>
                    </li>)}
                </ul>}
        </li>
    )
}


export default MenuItem