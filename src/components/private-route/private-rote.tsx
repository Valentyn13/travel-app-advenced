import { Navigate, Outlet } from "react-router-dom";
import { FC, ReactNode } from "react";
import { IUser } from "../../types/user.types";

interface IPrivateRouteProps {
  user: IUser | null;
  redirectPath: string;
  children: ReactNode;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({
    user,
    redirectPath,
    children,
}) => {
  if (!user) return <Navigate to={redirectPath} />;

  return children ? children : <Outlet />;
};

export default PrivateRoute;