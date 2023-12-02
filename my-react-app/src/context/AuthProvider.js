import { createContext, useState } from "react";

// we are creating context hook because we want to make it availabe to all the componenet
const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [auth , setAuth] = useState({});
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
// there is two exports because we have to export both the state as well as context.
// if we make both file in different files then it is easy to export things. {use harry video to understand the same}.