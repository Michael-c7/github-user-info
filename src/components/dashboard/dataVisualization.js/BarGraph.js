import React from 'react'
import styled from "styled-components";
import * as d3 from "d3";

const BarGraph = () => {
  // set the dimensions and margins of the graph
const margin = {top: 20, right: 30, bottom: 40, left: 90},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#bargraph_viz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// Parse the Data
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then( function(data) {

// Add X axis
const x = d3.scaleLinear()
.domain([0, 13000])
.range([ 0, width]);
svg.append("g")
.attr("transform", `translate(0, ${height})`)
.call(d3.axisBottom(x))
.selectAll("text")
  .attr("transform", "translate(-10,0)rotate(-45)")
  .style("text-anchor", "end");

// Y axis
const y = d3.scaleBand()
.range([ 0, height ])
.domain(data.map(d => d.Country))
.padding(.1);
svg.append("g")
.call(d3.axisLeft(y))

//Bars
svg.selectAll("myRect")
.data(data)
.join("rect")
.attr("x", x(0) )
.attr("y", d => y(d.Country))
.attr("width", d => x(d.Value))
.attr("height", y.bandwidth())
.attr("fill", "#69b3a2")

})
  

  return (
    <Wrapper>
      <div id="bargraph_viz"></div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  position:relative;
  background:#fff;
  width:450px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:2rem;
  border-radius:5px;

  margin:1rem;
  margin-left:2rem;


`

export default BarGraph