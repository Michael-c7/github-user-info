import React from 'react'
import styled from "styled-components";
import {useGlobalContext} from '../../context'

const FollowersList = () => {
  const { followers } = useGlobalContext()
  return (
    <Wrapper>
      <div className='followers_container'>
        <ul className='followers'>
          {followers.map((follower) => {
            return (
              <li className='followers__item' key={follower?.id}>
                <img className='followers__item__img' src={follower?.avatar_url} alt={follower?.name}/>
                <div className='followers__item__data'>
                  <h2 className='followers__item__name'>{follower?.html_url?.slice(19)}</h2>
                  <a className='followers__item__link' href={follower?.html_url}>{follower?.html_url}</a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  position:relative;
  background:#fff;
  border-radius:0px 5px 5px 5px;
  padding:2rem;
  max-height:250px;
  margin-left:2rem;


  :before {
    position:absolute;
    content:'Followers';
    top:-30px;
    left:0;
    background:#fff;
    border-radius:5px 5px 0px 0px;
    font-size:1rem;
    padding:0.25rem 0.75rem;
    color:var(--gray--1);
    letter-spacing:1.25px;
    font-weight:500;
  }



  .followers_container {
    // background:red;
    height:100%;
    overflow:auto;
  }

  .followers {
   
  }

  .followers__item {
    display:flex;
    align-items:center;
    margin:1rem 0;
  }


  .followers__item__img {
    width:40px;
    height:40px;
    border-radius:100px;
  }


  .followers__item__data {
    margin-left:1rem;
  }

  .followers__item__name {
    font-size:1rem;
  }


  .followers__item__link {
    color:var(--gray--2);
  }



  @media (max-width: 1200px) {
    height:400px;
    margin:3rem 1.5rem 0 1.5rem;
  }
`


export default FollowersList