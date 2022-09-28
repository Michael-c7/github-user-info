import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useGlobalContext } from '../context'


const LogoutButton = () => {
    const { logout } = useAuth0();
    const { isLoggedInLocalStorageKey,setIsLoggedIn } = useGlobalContext()

    const handleLogout = _ => {
      // for the protected route to work
      setIsLoggedIn(localStorage.setItem(isLoggedInLocalStorageKey, JSON.stringify(false)))

      // for Auth0 to work
      logout({ returnTo: 'http://localhost:3000/login' })
    }

    return (
        <button className='btn--1' onClick={() => handleLogout()}>Logout</button>
      );
}

export default LogoutButton