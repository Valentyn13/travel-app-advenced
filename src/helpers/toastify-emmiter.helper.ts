import { toast, Bounce } from "react-toastify";

const toastifyEmitter = (action: "error" | "succes" | "default",succesMessage:string, errorMessage:string) => {
  if (action === "succes") {
    toast.success(succesMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  if (action === "error") {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
};

export { toastifyEmitter };
