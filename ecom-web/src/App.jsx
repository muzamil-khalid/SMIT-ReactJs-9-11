import React, { useState } from 'react'
import Todos from './pages/todos'
import UseEffect from './components/hooks/useEffect'

const App = () => {

    // const [count,setCount] = useState(0)
  // console.log(inpValue,"inpValueinpValueinpValue")
    // const Add = () => {
    //     setCount(count + 1)
    // }

    // const dec = () => {
    //     if(count > 0){
    //         setCount(count - 1)
    //     }
    //     console.log("tssadsa")
    // }
    
  


    

  return (
    <div>
        {/* <button onClick={Add}>+</button>
      <h1>Count Value is {count}</h1>
        <button onClick={dec}>-</button> */}

        <UseEffect/>
            
    </div>
  )
}

export default App
