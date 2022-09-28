import React from 'react'
import styled from "styled-components";

let testImg = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SYl6dtEToEu5XaogMNFC0AHaD2%26pid%3DApi&f=1&ipt=2a77825593c10bef69d1c03606e7d50d3f23e33d193d75e8ec15cfd67c7a9440&ipo=images'


const FollowersList = () => {
  return (
    <Wrapper>
      <div className='followers_container'>
        <ul className='followers'>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
          <li className='followers__item'>
            <img className='followers__item__img' src={testImg} alt=''/>
            <div className='followers__item__data'>
              <h2 className='followers__item__name'>john smith</h2>
              <a className='followers__item__link' href='/'>https://github.com/john-smilga</a>
            </div>
          </li>
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
  max-height:400px;
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
`


export default FollowersList