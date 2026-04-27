import { useContext } from "react";
import { Alertshow } from "../ToastContext";
export const useToast = () => {
    return useContext(Alertshow);
};
