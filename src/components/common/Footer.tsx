import { Link } from "react-router-dom";

import love from "../../assets/love.svg";

const Footer = () => {
  return (
    <footer className="flex flex-column justify-content-center align-items-center px-4 bg-gray-200 shadow-1">
      <div>
        <p className="flex justify-content-center align-items-center">
          With <img className="mx-1" src={love} alt="love" /> por
          <Link className="ml-1" target="_blank" to="https://javiervallejo.me/">
            Javier Vallejo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
