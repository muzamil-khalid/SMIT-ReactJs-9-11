import React, { useState } from 'react'

const Todos = () => {
        const [inpValue,setInpValue] = useState("")
    const [todos,setTodos] = useState([])
      const addTodo = () => {
        const myTodos = {
            id:Date.now(),
            text:inpValue,
            isComplete:false
        }
        console.log(myTodos,"myTodosmyTodos")
        setTodos([...todos,myTodos])
        setInpValue("")
    }
    console.log(todos,"test")
  return (
    <div>
            <input type="text" name="Add Todo" id="addTodo" value={inpValue} placeholder='addTodo' onChange={(e)=>setInpValue(e.target.value)} />
            <button onClick={addTodo}>Add Item</button>




        {
            todos.map((item,index)=>{
                return(
                    <div>
                        <p>{item.text} <span>{item.isComplete ? "Completed" : "not" }</span> </p>
                        
                    </div>

                )
            })
        }
        </div>
  )
}

export default Todos
