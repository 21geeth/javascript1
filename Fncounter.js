import React,{useState} from 'react'

function Fncounter() {
    let cnt=0
   const[counter,setCounter]=useState(7)
   //const[counter,setCounter]=useState(0)
    //const increment=()=>{
       // setCounter(counter+1)
   // }
    //const decrement=()=>{
       // setCounter(counter-1)
  //<input type="button" value="add" onClick={increment}/>
  //<input type="button" value="del" onClick={decrement}/> 
  //<p>Counter : {counter} </p> }
  return (
    <div>
        <h1>
            this is functional component
        </h1>
        <h3> {counter}</h3>
        <h3>{cnt}</h3>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>counter<=10 ? setCounter(counter+1) : alert('Not Exceed')}>+</button>
        <button onClick={()=>counter>0 ? setCounter(counter-1) : alert('Not Exceed')}>-</button>
    </div>
  )
}

export default Fncounter
