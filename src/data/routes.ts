// All the routes of the application.
export const ROUTES = Object.freeze({
  LOGIN: "/login",
  INDEX: "/",
  PRODUCTS: {
    LIST: "/products",
    CREATE: "/products/create",
    UPDATE: "/products/update/:id",
    READ: "/products/:id",
  },
  ABOUT: "/about",
});
