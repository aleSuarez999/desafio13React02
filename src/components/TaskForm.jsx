import { useState } from "react";
import Button from "./Button";
import Text from "./Text";
import { postTasks } from "../../utils/api";

export default function TaskForm({ onAdd }) {

  const [values, setValues] = useState({});
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("mando submit")
    if (values.title != "" && values.descript != "") // si hay un texto 
    {
      onAdd(values); // agrego la tarea
      //postTasks(values)
      setValues({}); // reinicio , esto cambia el value del text
    }
  };

  const handleChange = (e) => {
    // sino no escribe
   // setText([e.target.name] = e.target.value)
    setValues({...values, [e.target.name]: e.target.value})
  }
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <Text as="label" >Titulo</Text>
          <input
            name="title"
            id="title"
            type="text"
            placeholder="Titulo de la tarea"
            value={values.title}
            onChange={handleChange}
          />
    <Text as="label" >Tarea</Text>
      <input
        name="descript"
        id="descript"
        type="text"
        placeholder="Descripción de la tarea"
        value={values.descript}
        onChange={handleChange}
      />
      <Button type="submit" label="Agregar" />
    </form>
  );
}
