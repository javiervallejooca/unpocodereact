import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "info";

const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

/**
 * Displays a toast notification with the given message and type.
 * @param message - The message to display in the toast notification.
 * @param type - The type of toast notification to display.
 */
export const showToast = (message: string, type: ToastType) => {
  toast[type](message, toastOptions);
};
