import { Link } from "react-router-dom"
import { RouteProps } from "../../../interfaces/interfaces"

type Props = {
    route: RouteProps,
    active: string,
    setActive: Function
}

const MenuItem = ({ route, active, setActive }: Props) => {
    return (
        <li onClick={() => {
            setActive(!active ? route.id : active !== route.id ? route.id : -1);
        }} className={active === route.id ? 'active' : ''}>
            <div>
                <span>{route.name}</span>
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