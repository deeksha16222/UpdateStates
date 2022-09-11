import React from 'react'
import {useState} from 'react'

export default function Update(){
 const [data, setData] =useState("hello")
 function updateData(){
   setData("deeksha")
 }
  return(
 <div>
 <h1> {data} </h1>
 <button onClick={updateData}> Update me here </button>
 </div>
  )
}