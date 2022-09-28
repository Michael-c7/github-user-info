import React from 'react'
import styled from "styled-components";
import {useGlobalContext} from '../../context'
import {FaBook, FaUserPlus, FaUserFriends, FaLaptopCode} from 'react-icons/fa'


const GeneralInfo = () => {
  const { user } = useGlobalContext()

  return (
    <Wrapper>
        <ul className='info__items'>
          <li className='info__item'>
            <div className='info__item__icon-container repos-icon'>
              <FaBook className='info__items__icon'/>
            </div>
            <div className='info__item__info'>
              <h2>{user?.public_repos}</h2>
              <p>repos</p>
            </div> 
          </li>
          <li className='info__item'>
            <div className='info__item__icon-container followers-icon'>
              <FaUserFriends className='info__items__icon'/>
            </div>
            <div className='info__item__info'>
              <h2>{user?.followers}</h2>
              <p>followers</p>
            </div>
          </li>
          <li className='info__item'>
            <div className='info__item__icon-container following-icon'>
             <FaUserPlus className='info__items__icon'/>
            </div>
            <div className='info__item__info'>
              <h2>{user?.following}</h2>
              <p>following</p>
            </div>
          </li>
          <li className='info__item'>
            <div className='info__item__icon-container gist-icon'>
             <FaLaptopCode className='info__items__icon'/>
            </div>
            <div className='info__item__info'>
              <h2>{user?.public_gists}</h2>
              <p>Gist</p>
            </div>
            </li>
        </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top:var(--dashboard-component-top-margin);


  .info__items {
    display:flex;
    flex-direction:row;
  }

  .info__item {
    flex-basis:25%;
    background:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 2rem;
    border-radius:5px;
    padding:1rem 0;
  }

  .info__item:first-of-type {
    margin-left:0;
  } 

  .info__item:last-of-type {
    margin-right:0;
  } 

  .info__item__icon-container {
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    background:red;
    border-radius:100px;
  }

  .info__items__icon {
    font-size:1.25rem;
  }

  .repos-icon {
    background-color:var(--pink);
    color:var(--pink-dark);
  }


  .followers-icon {
    background-color:var(--cyan);
    color:var(--cyan-dark);
  }


  .following-icon {
    background-color:var(--purple);
    color:var(--purple-dark);
  }


  .gist-icon {
    background-color:var(--yellow);
    color:var(--yellow-dark);
  }

  .info__item__info {
    margin-left:1.5rem;
  }



  @media (max-width: 1200px) {
    margin:var(--dashboard-component-top-margin) 1.5rem 0 1.5rem;

    .info__items {
      display:flex;
      flex-direction:column;
    }

    .info__item {
      flex-basis:100%;
      margin:0.5rem 0;
      padding:1rem 0;
      text-align:center;
    }
  }

`

export default GeneralInfo