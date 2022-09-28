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
// components
import Loading from '../components/Loading'

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { isLoggedIn, setIsLoggedIn, setIsLoading } = useGlobalContext()

  // when server spins up start on the login page
  if(!isAuthenticated && !isLoggedIn) {
    return <Navigate to='/login'/>
  }

  if(isLoading) {
    return <Loading/>
  }

  /*to prevent people from clicking the login btn on the login screen, then being sent the the auth0 login screen then backing out and putting on the url for the dashboard */
  if(!isLoading && !isAuthenticated && isLoggedIn) {
    return <Navigate to='/login'/>
  }



  return (
    <Wrapper>
      <Header/>
      <main className='content-wrapper-main'>
        <div className='content-wrapper wrapper-search-and-display'>
          <SearchForm/>
          <RequestDisplay/>
        </div>

        <GeneralInfo/>

        <div className='content-wrapper wrapper-user-and-followers'>
          <User/>
          <FollowerList/>
        </div>

        <InfoCharts/>
      </main>
    </Wrapper>
  )
}


const Wrapper = styled.header`
  .content-wrapper-main {
    width:1200px;
    margin:calc(var(--dashboard-component-top-margin) * 1.5) auto 0 auto;
  }

  .content-wrapper {
    display:flex;
    flex-direction:row;
  }

  .wrapper-search-and-display {
    display:grid;
    grid-template-columns:75% 25%;
  }

  .wrapper-user-and-followers {
    display:grid;
    grid-template-columns:50% 50%;
    margin-top:calc(var(--dashboard-component-top-margin) * 1.5);
  }





  @media (max-width: 1200px) {
    width:100%;
    .wrapper-search-and-display,
    .wrapper-user-and-followers {
      display:flex;
      flex-direction:column;
    }
  }


  @media (max-width: 768px) {
    .content-wrapper {
      display:flex;
      flex-direction:column;
    }
  }
`

export default Dashboard