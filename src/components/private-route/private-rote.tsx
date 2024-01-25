import { Navigate, Outlet } from "react-router-dom";
import { FC, ReactNode } from "react";

interface IPrivateRouteProps {
  redirectPath: string;
  children: ReactNode;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ redirectPath, children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to={redirectPath} />;

  return children ? children : <Outlet />;
};

export default PrivateRoute;
