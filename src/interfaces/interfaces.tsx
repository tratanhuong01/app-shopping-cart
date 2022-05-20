import { ReactNode } from "react";

export interface RouteProps {
    id: string,
    path: string,
    name?: string,
    element: ReactNode,
    exact?: boolean,
    listChilren?: { id: string, name: string, path: string }[
    ],
    hasChildren: boolean
}