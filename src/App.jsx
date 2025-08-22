import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";
import { getTasks, postTasks } from "../utils/api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  // creo el objeto para las tareas y lo inicializo vacio

  useEffect(() => {
    
    getTasks()
      .then (
        
        obj => {
         // console.log(obj)
          setTasks(obj)
        }
      )

  }, [])
  

  const addTask = (values) => {
    
    postTasks(values)
      .then( obj => {

        console.log("RESULTADO NUEVO O EDICION->", obj)
        getTasks()
          .then(obj => setTasks(obj))
   
       })

  
  };

  const deleteTask = (id) => {
    alert("aun no realizada")
    //setTasks(tasks.filter((task) => task.id !== id)); /// genero un nuevo objeto sin el que se elimina
  };

  return (
    <div className="grid">
     <div className="col-xxl-3 col-lg-6 col-xs-12">

      <h3>Lista de Tareas: {tasks.length}</h3>
      <div className="taskform__container d-flex">
          <TaskForm onAdd={addTask} />
      </div>
      <div className="tasklist__container">
          <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
      </div>
      </div>
  );
}