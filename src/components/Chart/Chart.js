import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props)=>{
    //console.log(props);
    return(<div className="chart">
        {props.data.map((d)=>{ return <ChartBar key={d.id} value={d.value} label={d.label} maxVal= {d.maxVal} />})}
    </div>)


};

export default Chart;