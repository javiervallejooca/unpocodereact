import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import AppRoutes from "./data/AppRoutes";

import ErrorBoundaryFallback from "./components/common/ErrorBoundaryFallback";

import "./App.css";

import "primereact/resources/themes/lara-light-blue/theme.css"; //Theme
import "primeflex/primeflex.css"; // Prime Flex
import "primeicons/primeicons.css"; // Prime Icons

import "react-toastify/dist/ReactToastify.css"; // Toast

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading</p>}>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryFallback}
          onReset={() => {}}
        >
          <AppRoutes />
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
