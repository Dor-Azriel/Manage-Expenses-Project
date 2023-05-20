import React from "react";
import Chart from "../Chart/Chart";


const ExpensesChart = (props)=>{
    const data =[
        {id:1, label:"jan", value:0},
        {id:2, label:"Feb", value:0},
        {id:3, label:"Mar", value:0},
        {id:4, label:"Apr", value:0},
        {id:5, label:"May", value:0},
        {id:6, label:"jun", value:0},
        {id:7, label:"jul", value:0},
        {id:8, label:"Aug", value:0},
        {id:9, label:"Sep", value:0},
        {id:10, label:"Oct", value:0},
        {id:11, label:"Nov", value:0},
        {id:12, label:"Dec", value:0},
    ];
    
    //caculate amount spent in each month
    props.data.map((dat)=>{
        //console.log(dat.date.getMonth());
        data[dat.date.getMonth()].value += dat.amount;
    })
    //calculate the Max value of the arrays values and set it to be MaxVal in each element in the array
    const MaxValue =Math.max(...data.map((d)=>d.value))
    console.log(MaxValue)
    const fullData = data.map((dat)=>{return {...dat,maxVal:MaxValue};});
    //console.log(fullData);
    return <Chart data ={fullData}/> 
};



export default ExpensesChart;