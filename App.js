
import './App.css';
import{useState} from "react";
import { Task } from './task';
function App() {

  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask]= useState("");

  const handlechange=(event)=>{
    setNewTask(event.target.value);
  }
  const addtask=()=>{
    const task ={
      id : todolist.length=== 0 ? 1 : todolist[todolist.length-1].id+1,
      taskname : newTask
    }
      setTodoList([...todolist, task]);
  }
  const deleteTask =(id)=>{
    setTodoList(todolist.filter((task)=>task.id !== id))
   }
 
  return(
  <div className="App">
    <div className="addtask">
      <input onChange={handlechange}/>
      <button onClick={addtask}>
         Add Task
      </button>
    </div>
    <div className="list">
     {todolist.map((task)=>{
        return <Task 
        taskname ={task.taskname} 
        id={task.id} 
        deleteTask={deleteTask}
        />
     })}
    </div>
  </div>
)
}


export default App;
