import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(1)

    useEffect(()=>{
        console.log("useeffect")
    },[count])


  return (
    <div>
        <button onClick={()=>setCount(count  + 1)}>+</button>
      <h1>{count}</h1>
        <button>-</button>
    </div>
  )
}

export default UseEffect
