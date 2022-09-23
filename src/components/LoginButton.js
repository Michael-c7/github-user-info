import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useGlobalContext } from '../context'


const LoginButton = () => {
    const { isLoggedInLocalStorageKey } = useGlobalContext()
    const handleLogin = _ => {
        // for the protected route to work
        setIsLoggedIn(localStorage.setItem(isLoggedInLocalStorageKey, JSON.stringify(true)))
        
        // for Auth0 to work
        loginWithRedirect()
    }

    const { loginWithRedirect } = useAuth0();
    const { setIsLoggedIn } = useGlobalContext()
    return <button onClick={() => handleLogin()}>Log In</button>;
}

export default LoginButton