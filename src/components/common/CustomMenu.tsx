import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../../zustand/userStore";

import { ROUTES } from "../../data/routes";

import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";

const CustomMenu = () => {
  const navigate = useNavigate();

  const { user, deleteUser } = useUserStore();

  const handleCloseSesion = () => {
    deleteUser();
    navigate(ROUTES.LOGIN);
  };

  return (
    <div id="menu">
      <div className="flex justify-content-end border border-bottom-1 border-gray-400">
        <p className="my-2 flex gap-1 align-items-center">
          <AiOutlineUser />
          Conectado como: <strong>{user?.username}</strong>
        </p>
      </div>
      <div className="flex gap-4 align-items-center">
        <Link to={ROUTES.INDEX}>
          <p>Inicio</p>
        </Link>
        <Link to={ROUTES.PRODUCTS.LIST}>
          <p>Productos</p>
        </Link>
        <Link to={ROUTES.ABOUT}>
          <p>Acerca de</p>
        </Link>

        <p
          className="my-2 flex gap-1 align-items-center cursor-pointer"
          onClick={handleCloseSesion}
        >
          <AiOutlinePoweroff />
          Cerrar sesión
        </p>
      </div>
    </div>
  );
};

export default CustomMenu;
