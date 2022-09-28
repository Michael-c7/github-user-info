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
          <img className='dashboard__content__img'src={user.picture} alt={user.name} />
          <h2 className='dashboard__content__heading'><span>Welcome, </span>{user.name} <span>({user.email})</span></h2>
          <div className='logout-btn'>
            <LogoutButton/>
          </div>
        </div>
      ) : (
        <h2 className='no-auth'>user is not authenticated</h2>
      )}
    </Wrapper>
  )
}


const Wrapper = styled.header`
  --spacing:1.5rem;
  background:#fff;
  width:100%;
  font-size:0.85rem;
  
  
  .dashboard__content {
    padding:1rem 0;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    text-align:center;
  }

  .dashboard__content__img {
    width:40px;
    height:40px;
    border-radius:100px;
    margin-right:var(--spacing);
  }

  .dashboard__content__heading {

  }

  .dashboard__content__heading span {
    font-weight:400;
  }


  .logout-btn {
    margin-left:calc(var(--spacing));
    position:relative;
    top:2px;
  }

  .no-auth {
    text-align:center;
  }


  @media (max-width:435px) {
    --spacing:0rem;

    .logout-btn {
      margin-top:0.25rem;
      top:0px;
    }
  }
`


export default Header
