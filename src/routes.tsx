import { Route } from "react-router-dom";
import { GuardRoute } from "./components/utils/GuardRoute";
import Dashboard from "./views/Dashboard";

interface RouteObj {
  path?: string;
  element: JSX.Element;
  auth?: boolean;
  guest?: boolean;
  index?: boolean;
  children?: RouteObj[];
}

const routes: RouteObj[] = [
  {
    index: true,
    auth: true,
    element: <Dashboard />,
  },
  {
    path: "/login",
    guest: true,
    element: <div>Login Page</div>,
  },
];

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
);

export default routes;
