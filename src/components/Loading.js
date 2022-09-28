import React from 'react'
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
        <h1 className='loading-text'>Loading...</h1>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background:#efefef;
  width:100%;
  height:100%;
  position:absolute;
  z-index:999;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:2.5rem;

  @keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  }

  .loading-text {
    animation-name:spin;
    animation-duration:0.85s;
    animation-iteration-count:infinite;
  }

`

export default Loading