import React from 'react'
import styled from "styled-components";
import { MdOutlineSearch } from 'react-icons/md'


const SearchForm = () => {
  return (
    <Wrapper>
      <div className='search-form-container'>
        <div className='search-icon'>
          <MdOutlineSearch/>
        </div>
        <form className='search-form-form'>
          {/*eg: John Smilga */}
          <input className='search-form-form__input' type='text' placeholder='Enter Github User'/>
          <button className='btn--2 search-form-form__btn' type='submit'>Search</button>
        </form>
      </div>

    </Wrapper>
  )
}


const Wrapper = styled.section`


  .search-form-container {
    display:grid;
    align-items:center;
    position:relative;
    background:#fff;
    border-radius:5px;
    width:100%;
    height:100%;
    padding:0.75rem 0.5rem;
    grid-template-columns: auto 1fr;

  }



  .search-icon {
    font-size:1.4rem;
    position:relative;
    top:3px;
    color:var(--gray--1);
  }


  .search-form-form {
    width:100%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    
  }


  .search-form-form__input {
    height:100%;
    flex-basis:100%;
    // flex-shrink: 1; 
    font-size:1.25rem;
    margin:0 0.5rem;
    padding:0.25rem;
    border-radius:5px;
    border:1px solid #efefef;
    letter-spacing:0.5px;
  }

  .search-form-form__btn {
    height:100%;
    font-size:1.25rem;
    padding:0.25rem 0.5rem;
    letter-spacing:0.5px;
  }

`


export default SearchForm