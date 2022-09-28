import React from 'react'
import styled from "styled-components";


const RequestDisplay = () => {
  return (
    <Wrapper>
      <div className='request-wrapper'>
        <h2 className='request-heading'>Requests : 52 / 60</h2>
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

`

export default RequestDisplay