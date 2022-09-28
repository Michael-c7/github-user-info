import React from 'react'
import styled from "styled-components";
import {useGlobalContext} from '../../context'

import { FaCity, FaMapMarkerAlt, FaLink } from 'react-icons/fa'

import placeholderImage from '../../default-placeholder-profile-picture.png'
let testImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.t_7_j4hY-Y1FoUozKqWeiQHaFj%26pid%3DApi&f=1&ipt=0b990ebc1997429c1b191eb616f7faea27d7e8afb7711bb030b617fd44477a78&ipo=images'

const User = () => {
  const { user } = useGlobalContext()

  return (
    <Wrapper>
      <div className='user__profile-container'>
        <div className='user__profile'>
          <img className='user__profile__img' src={user?.avatar_url || placeholderImage} alt=''/>
          <div className='user__profile__info'>
            <h2 className='user__profile__name'>{user?.name}</h2>
            <p className='user__profile__username'>@j{user?.login}</p>
          </div>
        </div>
        <button className='btn--3'>
          <a href={user?.html_url} target='_blank' rel='noreferrer'>Follow</a>
        </button>
      </div>


      <div className='user__profile__data'>
        <p className='user__profile__description'>{user?.bio || 'user has no description '}</p>
        <div className='user__profile__item user__profile__entity'>
          <FaCity className='user__profile__icon'/>
          <p>{user?.company}</p>
        </div>
        <div className='user__profile__item user__profile__location'>
          <FaMapMarkerAlt className='user__profile__icon'/>
          <p>{user?.location}</p>
        </div>
        <div className='user__profile__item user__profile__website'>
          <FaLink className='user__profile__icon'/>
          <a className='link' href={user?.blog}>{user?.blog}</a>
        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  position:relative;
  background:#fff;
  border-radius:0px 5px 5px 5px;
  margin-right:2rem;
  padding:1.5rem;
  max-height:250px;

  :before {
    position:absolute;
    content:'User';
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


  .user__profile-container {
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .user__profile {
    display:flex;
    align-items:center;
  }


  .user__profile__info {
    margin-left:1rem;
  }


  .user__profile__img {
    width:50px;
    height:50px;
    border-radius:100px;
  }


  .user__profile__name {
    font-size:1.15rem;
  }

  .user__profile__username {
    font-size:1rem;
  }


  .user__profile__description {
    margin:0.5rem 0;
    max-height:175px;
    overflow:auto;
  }


  .user__profile__item {
    display:flex;
    algin-items:center;
    position:relative;
    margin:0.5rem 0;
  }

  .user__profile__icon {
    position:relative;
    margin-right:0.5rem;
    top:3px;
    color:var(--gray--1);
  }

  .link {
    color:var(--cyan-dark);
  }



  @media (max-width: 1200px) {
    height:400px;
    margin:0 1.5rem 0 1.5rem;
  }
`

export default User