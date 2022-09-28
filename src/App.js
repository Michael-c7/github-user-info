import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './pages/ProtectedRoute'
import {useGlobalContext} from './context'






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
