import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import useUserStore from "../../zustand/userStore";

import { ROUTES } from "../../data/routes";

import CustomMenu from "./CustomMenu";

import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Button } from "primereact/button";

import logo from "../../assets/logo-300-60.jpg";
import "./styles/header.css";

const Header = () => {
  const menuRight = useRef<Menu>(null);

  const navigate = useNavigate();

  const { user, deleteUser } = useUserStore();

  const items: MenuItem[] = [
    {
      label: "Conectado: " + user?.username,
      items: [
        {
          label: "Inicio",
          command: () => {
            navigate(ROUTES.INDEX);
          },
        },
        {
          label: "Productos",
          command: () => {
            navigate(ROUTES.PRODUCTS.LIST);
          },
        },
        {
          label: "Acerca de",
          command: () => {
            navigate(ROUTES.ABOUT);
          },
        },
        { separator: true },
        {
          label: "Cerrar sesión",
          icon: "pi pi-upload",
          command: () => {
            deleteUser();
            navigate(ROUTES.INDEX);
          },
        },
      ],
    },
  ];

  return (
    <header
      id="header"
      className="flex justify-content-between align-items-center bg-gray-200 shadow-1 px-4"
    >
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logotipo de la aplicación"
            style={{ maxWidth: "80%" }}
          />
        </Link>
      </div>
      <nav>
        <div className="hidden lg:block desktop-menu">
          <CustomMenu />
        </div>
        <div className="block lg:hidden mobile-menu">
          <Menu
            model={items}
            popup
            ref={menuRight}
            id="popup_menu_right"
            popupAlignment="right"
          />
          <Button
            label="Menú"
            icon="pi pi-align-right"
            className="mr-2"
            onClick={(event) => menuRight?.current?.toggle(event)}
            aria-controls="popup_menu_right"
            aria-haspopup
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
