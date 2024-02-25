"use client"
import './App.css'
import React, { useState } from 'react'
export default function App() {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
const [Maintask, setMaintask] = useState([]);
  const submithandler = (e)=>{ e.preventDefault();
setMaintask([...Maintask,{task,desc}]);                        
console.log(task);
console.log(desc);                 settask("");
setdesc("");                            }
  let rendertask= <h3>No Task Available</h3>
const dlthandler= (i)=>{
  let copytask = [...Maintask];
  copytask.splice(i,1);
  setMaintask(copytask);
}
 if(Maintask.length>0){rendertask= Maintask.map((t,i)=>{
    return <li key={i}><div class="tasks">
      <h4>{t.task}</h4>
      <h6>{t.desc}</h6>
      <button 
        onClick={
        ()=>{dlthandler(i)}} class="delete">Delete</button>
      <input type="checkbox"></input>
    </div> 
    </li>
})}
    return(
    <main>
      <h1>TO DO LIST</h1>
      <form onSubmit={submithandler}>
        <input type="text"
          placeholder="ENTER A TASK" value={task} onChange={ (e)=>{ settask(e.target.value)}} ></input>
        <input type="text"
          placeholder="ENTER DESCRIPTION OF TASK" value={desc} onChange={ (g)=>{ setdesc(g.target.value)}}></input>
        <button>Add Task</button>
      </form>
      <hr/>
      <div class="container">
        <ul>
          {rendertask}
        </ul>
      </div>
    </main>
  )
}
