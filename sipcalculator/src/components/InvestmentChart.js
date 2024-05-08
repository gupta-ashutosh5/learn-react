import React,{useState} from "react";
import * as d3 from "d3";

const InvestmentChart = ({totalInvestment, totalReturns, totalAmount}) => {
    var data = [totalInvestment, totalReturns]; 
  
    // Selecting SVG using d3.select() 
    var svg = d3.select("svg"); 

    let g = svg.append("g") 
            .attr("transform", "translate(150,120)"); 
        
    // Creating Pie generator 
    var pie = d3.pie(); 

    // Creating arc 
    var arc = d3.arc() 
                .innerRadius(0) 
                .outerRadius(100); 

    // Grouping different arcs 
    var arcs = g.selectAll("arc") 
                .data(pie(data)) 
                .enter() 
                .append("g"); 

    // Appending path  
    arcs.append("path") 
        .attr("fill", (data, i)=>{ 
            let value=data.data; 
            return d3.schemeSet3[i]; 
        }) 
        .attr("d", arc); 

    return (
        <div>
            <div>{totalInvestment}</div>
            <div>{totalReturns}</div>
            <svg width="300" height="300"> 
            </svg> 
        </div>
    )
}

export default InvestmentChart;