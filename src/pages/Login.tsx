import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useUserStore from "../zustand/userStore";

import { ROUTES } from "../data/routes";

// import { login } from "../services/login";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

import "./styles/login.css";

const Login = () => {
  const { user, setUser } = useUserStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    // TODO: Por hacer cuando se haga correctamente el login.
    // try {
    //   setLoading(true);
    // const user = { username, password };
    //   await login(user);
    //   setUser(user);
    //   navigate("/");
    // } catch (error) {
    //   setError("Los datos introducidos son incorrectos");
    // } finally {
    //   setLoading(false);
    setLoading(true);
    if (username === "root" && password === "root") {
      const newUser = { username: "root" };
      setUser(newUser);
      setLoading(false);
      navigate(ROUTES.INDEX);
    } else {
      setError("Los datos introducidos no son correctos");
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(user);

    if (user) {
      navigate(ROUTES.INDEX);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-column h-full">
      <div className="flex justify-content-center align-items-center flex-wrap h-full">
        <div className="w-full md:w-6 lg:w-3 bg-gray-200 m-4 p-4 shadow-2">
          <h1 className="mb-5 mt-2">Inicia sesión</h1>
          <div className="p-fluid">
            <div className="mb-3">
              <span className="p-float-label">
                <InputText
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Usuario</label>
              </span>
            </div>
            <br />

            <div className="mb-4">
              <span className="p-float-label">
                <Password
                  inputId="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  toggleMask
                />
                <label htmlFor="password">Contraseña</label>
              </span>
            </div>

            <div className="mt-4">
              <Button
                disabled={loading}
                label="Entrar"
                icon="pi pi-check"
                onClick={handleLogin}
              />
            </div>

            {error && (
              <>
                <div className="bg-red-200 text-red-900 text-center mt-4 p-2 border border-round-md">
                  <p>
                    <strong>{error}</strong>
                  </p>
                </div>
                <p>¿Quieres una pista?</p>
                <p>Prueba a introducir "root" como usuario y contraseña</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
