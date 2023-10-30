import { Navigate } from "react-router-dom";
import { User } from "../interfaces/user";

export function privateRoute(
  Component: React.ComponentType,
  user: User | null
) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}
