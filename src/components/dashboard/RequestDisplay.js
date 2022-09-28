import React from 'react'
import styled from "styled-components";
import {useGlobalContext} from '../../context'


const RequestDisplay = () => {
  const { rateLimit } = useGlobalContext()

  return (
    <Wrapper>
      <div className='request-wrapper'>
        <h2 className='request-heading'>Requests : {rateLimit?.rate?.remaining} / {rateLimit?.rate?.limit}</h2>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  position:relative;

  .request-wrapper {
    position:relative;
    top:-3px;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100%;
  }


  .request-heading {
    font-weight:500;
    color:var(--gray--1);
  }


  @media (max-width: 1200px) {
    .request-wrapper {
      top:1rem;
    }
  }

`

export default RequestDisplay