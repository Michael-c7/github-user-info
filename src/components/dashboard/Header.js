import React from 'react'
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../LogoutButton';

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
     
    <Wrapper>
      {isAuthenticated ? (
        <div className='dashboard__content'>
          <img src={user.picture} alt={user.name} />
          <h2 className='dashboard__content__heading'><span>Welcome, </span>{user.name}<span>({user.email})</span></h2>
          <div style={{marginLeft:'2rem'}}><LogoutButton/></div>
        </div>
      ) : (
        <h2>user is not authenticated</h2>
      )}
    </Wrapper>
  )
}


const Wrapper = styled.header`
  background:#fff;
  width:100%;
  
  
  .dashboard__content {
    padding:1rem 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }
`


export default Header
