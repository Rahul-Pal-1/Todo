// Just to make code readable, can be direclty accessable through context

import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;