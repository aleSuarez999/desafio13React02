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
    

    <ul className="task-list">
      {
      tasks.map((task, contador) => (
        <li key={task.id} className="task-item">
          {`${contador + 1} - ${task.text}`}  
          <FontAwesomeIcon  role='button' icon={faTrash} size="1x" onClick={() => sendDelete(task.id)} />
      
        </li>
      ))}
    </ul>
  );
} export default TaskList