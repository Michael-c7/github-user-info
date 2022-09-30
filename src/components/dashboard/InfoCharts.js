import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import PieChart from './dataVisualization.js/PieChart';
import BarGraph from './dataVisualization.js/BarGraph';


import { useGlobalContext } from '../../context'
// import everything into a namespace (here, d3):
// https://www.npmjs.com/package/d3
import * as d3 from "d3";
import { chordTranspose } from 'd3';

const InfoCharts = () => {
  const { repos } = useGlobalContext()
  let fakeLanguagesData = [
    ['javascript', 7]
    ['html', 15],
    ['css', 22],
    ['python', 13]
  ]
  const [languages, setLanguages] = useState([])



  useEffect(() => {
    let langs = repos?.map((item) => item.language)
    let uniqueLang = [...new Set(langs)].filter((el) => el !== null || undefined)
    let langAmt = uniqueLang.map(el => langs.filter(x => x === el).length)
    let langTypeAndAmt = Array.from({length:uniqueLang.length}).map((el, index) => {
      return [
        uniqueLang[index],
        langAmt[index],
      ]
    })
    setLanguages(langTypeAndAmt)
  }, [])


  return (
    <Wrapper>
      {/*languages pie chart*/}
      <div className='chart-section languages-chart'>
        {languages && <PieChart {...{languages}}/>}
      </div>

      <BarGraph/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-top:3rem;
margin-bottom:3rem;
display:grid;
grid-template-columns:1fr 1fr;

  .chart-section {
    position:relative;
    background:#fff;
    width:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:2rem;
    border-radius:5px;
    margin-right:2rem;
  }

  .languages-chart::before {
    content:'Languages';
    position:absolute;
    top:0.5rem;
    font-size:1.25rem;
    font-weight:500;
  }


`

export default InfoCharts