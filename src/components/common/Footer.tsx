import { Link } from "react-router-dom";

import { AiFillGithub } from "react-icons/ai";

import love from "../../assets/love.svg";

const Footer = () => {
  return (
    <footer className="flex flex-column justify-content-center align-items-center px-4 bg-gray-200 shadow-1">
      <div>
        <p className="flex justify-content-center align-items-center mt-4">
          With <img className="mx-1" src={love} alt="love" /> por
          <Link className="ml-1" target="_blank" to="https://javiervallejo.me/">
            Javier Vallejo
          </Link>
        </p>
        <div className="flex align-items-center">
          <Link
            target="_blank"
            to="https://github.com/javiervallejooca/unpocodereact"
          >
            <p className="flex align-items-center gap-2 mt-0">
              <span>Ir al repositorio de GitHub </span>
              <AiFillGithub size={25} />
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
