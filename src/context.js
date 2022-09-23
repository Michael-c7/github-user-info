import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)








    return (
        <AppContext.Provider value={{
            isLoading,
            isError,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = _ => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}