import { Navigate } from "react-router-dom";

import { User } from "../interfaces/user";

/**
 * A higher-order component that renders the given component if the user is authenticated, otherwise redirects to the login page.
 * @param Component - The component to be rendered if the user is authenticated.
 * @param user - The user object containing authentication information.
 * @returns The given component if the user is authenticated, otherwise a redirect to the login page.
 */
export function privateRoute(
  Component: React.ComponentType,
  user: User | null
) {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}
