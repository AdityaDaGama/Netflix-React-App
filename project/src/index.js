 import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from "./sdata";

function ncard(val){
  return(
    <Card 
title = {val.title}
imgsrc = {val.imgsrc}
sname = {val.sname}
link = {val.link}
/>

  )
}



ReactDOM.render(
  <>
  <h1 className='heading_style'>List of series</h1>


{Sdata.map(ncard)}
</>
  ,
  document.getElementById('root')
);
