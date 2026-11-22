
import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
const [list , setList]=useState([])
const [input,setInput]=useState("")

const handleclick=()=>{
    if (input=="")
return;
  setList([...list,input]);
  setInput("")
  }
  const handledelete =(indextoremove)=>{
    setList((prev)=>{
      prev.filter((_,index)=>
        index!==indextoremove
    )})
  return (
    <div>
        {/* Do not remove the main div */}
        <h3>To Do List </h3>
        <input 
        placeholder="enter to do"
        type="text"
        value={input}
        onChange={(e)=>{
                   setInput(e.target.value)
        }}
        />
        <button onClick={handleclick}>Add to list</button>
        <ul>
         {
          list.map((item,index)=>{
            <div key={index}>
            <li >{item}</li>
            <button onClick={()=>handledelete(index)}>delete</button>
            </div>
          })
         }
        </ul>
    </div>
  )
}
}
export default App
