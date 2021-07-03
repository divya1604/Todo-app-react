import React, {useState} from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
         <input placeholder="enter a task.." /><br />
         <button>Add task</button>
        </div>
        <div className="tasks">
         <div className="card">
           <h1>Tasks</h1>
           <button>Done</button>
           </div>

           
        </div>

      </div>
      
    </div>
  )
}

export default App
