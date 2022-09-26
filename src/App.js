import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './pages/ProtectedRoute'
import {useGlobalContext} from './context'

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
let githubGetUser = 'https://api.github.com/users/wesbos'
let githubUserRepos = 'https://api.github.com/users/john-smilga/repos?per_page=100'
let githubUserFollowers = 'https://api.github.com/users/john-smilga/followers'




function App() {
  // const {isLoading, isError} = useGlobalContext()
  const { isLoggedIn,setIsLoggedIn,setIsLoading } = useGlobalContext()
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <Routes>
        <Route path="/login" element={ <Home/> } />
        {/* <Route path="/" element={ <Dashboard/> } /> */}
        <Route path='/' element={ 
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard isAuthenticated={isAuthenticated}/>
          </ProtectedRoute>}
          />
        <Route path='*' element={ <ErrorPage/> } />
      </Routes>
    </>
  );
}

export default App;
