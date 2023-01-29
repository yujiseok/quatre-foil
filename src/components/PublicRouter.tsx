import { useAppSelector } from "app/hooks";
import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface Prop {
  children: ReactElement;
}

const PublicRouter = ({ children }: Prop) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  return accessToken ? <Navigate to="/" /> : children;
};
export default PublicRouter;
