import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../data/routes";

const ErrorBoundaryFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => {
  const navigate = useNavigate();

  const handleResetErrorBoundary = () => {
    resetErrorBoundary();
    navigate(ROUTES.INDEX);
  };

  return (
    <div className="flex">
      <p>Ha ocurrido un error, esta es la información</p>
      <p>{error.message}</p>
      <p>
        Puedes hacer clic <span onClick={handleResetErrorBoundary}>aquí</span>{" "}
        para volver al inicio
      </p>
    </div>
  );
};

export default ErrorBoundaryFallback;
