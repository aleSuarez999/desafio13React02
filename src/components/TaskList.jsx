import { useEffect, useState } from 'react';
import Button from './Button';
import Text from './Text';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

 function TaskList({ tasks, onDelete }) {

  const [contador, setContador] = useState(1)

  const sendDelete = (id) => {
    onDelete(id)
  }
  
  return (
    

    <dl className="task-list">
      
      {
     // (tasks.length > 0) ? (   
          
      tasks.map((task, contador) => (
        <>
        Nota {contador + 1}: <dt key={task._id} id={task._id} name={task._id}>
          
          {task.title}</dt>
          <dd>{task.descript}</dd>
          <FontAwesomeIcon className='delete_button'  role='button' icon={faTrash} size="1x" onClick={() => sendDelete(task.id)} />
          <hr/>
        </>
      ))
   //   ):undefined
    }
    </dl>
  );
} export default TaskList