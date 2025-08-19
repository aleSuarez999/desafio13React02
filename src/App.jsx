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
          console.log(obj)
            
          setTasks(obj)
        }
      )

  }, [])
  

  const addTask = (values) => {
    //const newId = (tasks.length + 1) // le sumo 1 al actual
    console.log("values-<", values)
    // mando a la api sin el id
    postTasks(values)
      .then( obj => {

        console.log("RESULTADO NUEVO O EDICION->", obj)
        getTasks()
          .then(obj => setTasks(obj))
        /*
        if (obj.msg == "Tarea actualizada")
        {

          const newTask = { ...values, {}};  
        }
        return 0
        const newTask = { id: newId, ...values }; // el objeto nuevo con id y tarea
        console.log("mando a crear->", newTask)
    
        setTasks([...tasks, newTask]); // agrego al objeto una nueva tarea
        */
       })

    // mandar a la base de datos
    
  };

  const deleteTask = (id) => {
    alert("aun no realizada")
    //setTasks(tasks.filter((task) => task.id !== id)); /// genero un nuevo objeto sin el que se elimina
  };

  return (
    <div class="grid">
     <div class="col-xxl-3 col-lg-6 col-xs-12">

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