import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    /*when you login w/ Auth0 goes out of the app to authenticate / do the login*/
    let isLoggedInLocalStorageKey = 'githubUserInfoIsLoggedIn'
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(isLoggedInLocalStorageKey) ? JSON.parse(localStorage.githubUserInfoIsLoggedIn) : false)








    return (
        <AppContext.Provider value={{
            isLoggedInLocalStorageKey,
            isLoading,setIsLoading,
            isError,setIsError,
            isLoggedIn, setIsLoggedIn,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = _ => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}