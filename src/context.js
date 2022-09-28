import React, { useState, useEffect, useContext } from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    /*when you login w/ Auth0 goes out of the app to authenticate / do the login*/
    let isLoggedInLocalStorageKey = 'githubUserInfoIsLoggedIn'
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem(isLoggedInLocalStorageKey) ? JSON.parse(localStorage.githubUserInfoIsLoggedIn) : false)

    // data
    const [rateLimit, setRateLimit] = useState({})
    const [user, setUser] = useState({})
    const [repos, setRepos] = useState({})
    const [followers, setFollowers] = useState({})
    const [searchTerm, setSearchTerm] = useState('')


    /*  
For unauthenticated requests,
the rate limit allows for up to 60 requests per hour.
Unauthenticated requests are associated
with the originating IP address,
and not the user making requests.
*/
// github api
let githubRootEndPoint = 'https://api.github.com/'
let githubRateLimit = 'https://api.github.com/rate_limit'
let githubGetUser = `https://api.github.com/users/${searchTerm}`
let githubUserRepos = `https://api.github.com/users/${searchTerm}/repos?per_page=100`
let githubUserFollowers = `https://api.github.com/users/${searchTerm}/followers`


    const fetchData = async (url, stateToSet) => {
        try {
            setIsLoading(true)
            let res = await fetch(url)
            let data = await res.json()
            setIsLoading(false)
            stateToSet(data)
        } catch(error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error)
        }

    }



    React.useEffect(() => {
    // set defaults here
        githubGetUser = 'https://api.github.com/users/john-smilga'
        githubUserRepos = 'https://api.github.com/users/john-smilga/repos?per_page=100'
        githubUserFollowers = 'https://api.github.com/users/john-smilga/followers'
    // get data
        // rate limit
        fetchData(githubRateLimit, setRateLimit)
        // user
        fetchData(githubGetUser, setUser)
        // repos
        fetchData(githubUserRepos, setRepos)
        // followers
        fetchData(githubUserFollowers, setFollowers)
    },[]) 



    return (
        <AppContext.Provider value={{
            isLoggedInLocalStorageKey,
            isLoading,setIsLoading,
            isError,setIsError,
            isLoggedIn, setIsLoggedIn,
            searchTerm, setSearchTerm,
            rateLimit,
            user,setUser,
            repos,
            followers,setFollowers,
            githubGetUser,
            githubUserFollowers,
            fetchData,
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = _ => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}