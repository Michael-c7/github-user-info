import React from 'react'
// import everything into a namespace (here, d3):
// https://www.npmjs.com/package/d3
import * as d3 from "d3";
import styled from "styled-components";

const PieChart = (userData) => {

  // set the dimensions and margins of the graph
  const width = 250,
  height = 250,
  margin = 40;

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  const radius = Math.min(width, height) / 2 - margin

  // append the svg object to the div called 'my_dataviz'
  const svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2}, ${height / 2})`);
  

  // Create dummy data
  const data = {a: 9, b: 20, c:30, d:8, e:12}
  // set the color scale
  const color = d3.scaleOrdinal()
  .range(d3.schemeSet2);

  // Compute the position of each group on the pie:
  const pie = d3.pie()
  .value(function(d) {return d[1]})
  const data_ready = pie(userData?.languages)

  var tooltip = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);



  // Now I know that group A goes from 0 degrees to x degrees and so on.

  // shape helper to build arcs:
  const arcGenerator = d3.arc()
  .innerRadius(0)
  .outerRadius(radius)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  svg
  .selectAll('mySlices')
  .data(data_ready)
  .join('path')
  .attr('d', arcGenerator)
  .attr('fill', function(d){ return(color(d.data[0])) })
  .attr("stroke", "black")
  .style("stroke-width", "1px")
  .style("opacity", 0.7)


  // Now add the annotation. Use the centroid method to get the best coordinates
  svg
  .selectAll('mySlices')
  .data(data_ready)
  .join('text')
  .text(function(d){ return "" + d.data[0] + "," + d.data[1]})
  .attr("transform", function(d) { return `translate(${arcGenerator.centroid(d)})`})
  .style("text-anchor", "middle")
  .style("font-size", 12)




  /* Create a div where the graph will take place */
  return (
    <Wrapper>
      <div id="my_dataviz"></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`

export default PieChart