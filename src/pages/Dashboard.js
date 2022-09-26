import React from 'react'
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Navigate, useParams } from "react-router-dom"
import {useGlobalContext} from '../context'

// dashboard components
import Header from '../components/dashboard/Header'
import SearchForm from '../components/dashboard/SearchForm'
import RequestDisplay from '../components/dashboard/RequestDisplay';
import GeneralInfo from '../components/dashboard/GeneralInfo'
import User from '../components/dashboard/User'
import FollowerList from '../components/dashboard/FollowersList'
import InfoCharts from '../components/dashboard/InfoCharts'

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { isLoggedIn,setIsLoggedIn,setIsLoading } = useGlobalContext()

  // when server spins up start on the login page
  if(!isAuthenticated && !isLoggedIn) {
    return <Navigate to='/login'/>
  }

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  /*to prevent people from clicking the login btn on the login screen, then being sent the the auth0 login screen then backing out and putting on the url for the dashboard */
  if(!isLoading && !isAuthenticated && isLoggedIn) {
    return <Navigate to='/login'/>
  }



  return (
    <Wrapper>
      <Header/>

      <div >
        <SearchForm/>
        <RequestDisplay/>
      </div>

      <GeneralInfo/>

      <div>
        <User/>
        <FollowerList/>
      </div>

      <InfoCharts/>
    </Wrapper>
  )
}


const Wrapper = styled.header`
  background:#E2E8F0;
`

export default Dashboard