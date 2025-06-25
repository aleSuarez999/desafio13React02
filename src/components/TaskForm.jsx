import { useState } from "react";
import Button from "./Button";

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text != "") // si hay un texto 
    {
      onAdd(text); // agrego la tarea
      setText(""); // reinicio , esto cambia el value del text
    }
  };

  const handleChange = (e) => {
    // sino no escribe
    setText(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Tarea nueva"
        value={text}
        onChange={handleChange}
      />
      
      <Button type="submit" label="Agregar" />
    </form>
  );
}
