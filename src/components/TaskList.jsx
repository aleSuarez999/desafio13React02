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
          
      tasks.map((task, contador) => (
        <>
        <dt key={task.title} id={task.title} name={task.title}>{contador + 1}: 
          
          {task.title}</dt>
          <dd id={`${contador+1}`}>{task.descript}</dd>
          <FontAwesomeIcon className='delete_button'  role='button' icon={faTrash} size="1x" onClick={() => sendDelete(task.id)} />
    
        </>
      ))

    }
    </dl>
  );
} export default TaskList