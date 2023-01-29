import { useAppSelector } from "app/hooks";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Prop {
  children: ReactElement;
}

const PrivateRouter = ({ children }: Prop) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return accessToken ? children : <Navigate to="/login" />;
};
export default PrivateRouter;
