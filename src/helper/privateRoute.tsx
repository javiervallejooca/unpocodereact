import { Navigate } from "react-router-dom";

import { User } from "../interfaces/user";
import { Action } from "../interfaces/action";

/**
 * A higher-order component that renders the given component if the user is authenticated, otherwise redirects to the login page.
 * @param Component - The component to be rendered if the user is authenticated.
 * @param user - The user object containing authentication information.
 * @returns The given component if the user is authenticated, otherwise a redirect to the login page.
 */
export function privateRoute(
  Component: React.ComponentType<{ action?: Action }>,
  user: User | null,
  props: { action?: Action } // Props opcionales
) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component {...props} />;
}
