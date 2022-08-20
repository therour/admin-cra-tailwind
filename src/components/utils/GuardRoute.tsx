import { Location, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

const HOME_PATH = "/";
const LOGIN_PATH = "/login";

interface GuardRouteProps {
  auth?: boolean;
  guest?: boolean;
  children: JSX.Element;
}

export const GuardRoute: React.FC<GuardRouteProps> = ({
  auth = false,
  guest = false,
  children,
}) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if ((auth || guest) && isLoading) {
    return <div>Loading....</div>;
  }

  if (auth && !user) {
    return <Navigate to={LOGIN_PATH} state={{ from: location }} replace />;
  }

  if (guest && user) {
    if (location.pathname === LOGIN_PATH) {
      const locationState = location.state as { from: Location } | undefined;
      return (
        <Navigate to={locationState?.from.pathname ?? HOME_PATH} replace />
      );
    }

    return <Navigate to={HOME_PATH} replace />;
  }

  return children;
};
