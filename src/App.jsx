import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  // creo el objeto para las tareas y lo inicializo vacio

  const addTask = (text) => {
    const newId = (tasks.length + 1) // le sumo 1 al actual
    const newTask = { id: newId, text }; // el objeto nuevo con id y tarea
    setTasks([...tasks, newTask]); // agrego al objeto una nueva tarea
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