import React from "react";
import { Routes, Route } from "react-router-dom"

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
  const data = useGlobalContext()
  // an example variable
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/dashboard' element={ 
          <ProtectedRoute loggedIn={loggedIn}>
            <Dashboard loggedIn={loggedIn}/>
          </ProtectedRoute>}
          />
        <Route path='*' element={ <ErrorPage/> } />
      </Routes>
    </>
  );
}

export default App;
