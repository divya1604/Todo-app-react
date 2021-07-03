import React, {useState} from 'react';
import './App.css';
function App() {
  
  const [text, setText] = useState()
  const [id, setId] = useState()

  const [tasks, setTask] = useState([]) 

  const ChangeText=(e)=>{
   setText(e.target.value);
  }

  const add=()=>{
setId(Date.now())
setTask([...tasks,{"id":id, "Task":text}])
setText("")
  }

  const del=(id)=>{
    const newList = tasks.filter((item)=>item.id!==id);
    setTask(newList);

  }

  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <h1>Todo App</h1>
         <input onChange={ChangeText} value={text} placeholder="enter a task.." /><br />
         <button onClick={add}>Add task</button>
         <h3>Developed by: Divya N</h3>
        </div>
        <div className="tasks">
          {tasks.map((task=>
         <div className="card">
           <h1>{task.Task}</h1>
           <button onClick={()=> del(task.id)}>Done</button>
           </div>
          ))}

           
        </div>

      </div>
      
    </div>
  )
}

export default App
