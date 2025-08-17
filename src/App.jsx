import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";
import { getTasks, postTasks } from "../utils/api";

export default function App() {
  const [tasks, setTasks] = useState([]);
  // creo el objeto para las tareas y lo inicializo vacio

  useEffect(() => {
    setTasks(getTasks)

  }, [])
  

  const addTask = (values) => {
    const newId = (tasks.length + 1) // le sumo 1 al actual
    console.log("values-<", values)
    // mando a la api sin el id
    postTasks(values)
    const newTask = { id: newId, ...values }; // el objeto nuevo con id y tarea
    console.log("mando a crear->", newTask)
    
    setTasks([...tasks, newTask]); // agrego al objeto una nueva tarea
    // mandar a la base de datos
    
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); /// genero un nuevo objeto sin el que se elimina
  };

  return (
    <>
      <h3>Lista de Tareas: {tasks.length}</h3>
      <div className="taskform__container">
          <TaskForm onAdd={addTask} />
      </div>
      <div className="tasklist__container">
          <TaskList tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
}