import { Route } from "react-router-dom"
import { GuardRoute } from "./components/utils/GuardRoute"
import Dashboard from "./views/Dashboard"
import Login from "./views/Login"

interface RouteObj {
    path?: string
    element: JSX.Element
    auth?: boolean
    guest?: boolean
    index?: boolean
    children?: RouteObj[]
}

const routes: RouteObj[] = [
    {
        // index: true,
        auth: true,
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <div>Home</div>,
            },
            {
                path: "/rewards",
                element: <div>Rewards</div>,
            },
            {
                path: "/settings",
                element: <div>Settings</div>,
            },
        ],
    },
    {
        path: "/login",
        guest: true,
        element: <Login />,
    },
]

export const toRoute = (props: RouteObj) => (
    <Route
        key={props.path ?? ""}
        index={props.index}
        path={props.path}
        element={
            <GuardRoute auth={props.auth} guest={props.guest}>
                {props.element}
            </GuardRoute>
        }
    >
        {props.children && props.children.map(toRoute)}
    </Route>
)

export default routes
