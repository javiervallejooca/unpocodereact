import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../data/routes";

type CustomError = {
  fileName: string;
  lineNumber: number;
  message: string;
};

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: CustomError;
  resetErrorBoundary: () => void;
}) => {
  const navigate = useNavigate();

  const handleResetErrorBoundary = () => {
    resetErrorBoundary();
    navigate(ROUTES.INDEX);
  };

  return (
    <div className="flex flex-column justify-content-center align-items-center h-full">
      <div>
        <p>Ha ocurrido un error, esta es la información:</p>
        <p>Dónde: {error.fileName}</p>
        <p>
          Qué: {error.message} (Línea {error.lineNumber})
        </p>
        <p>
          Puedes hacer clic{" "}
          <span onClick={handleResetErrorBoundary}>
            <b>aquí</b>
          </span>{" "}
          para volver al inicio
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundaryFallback;
