import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Task = ({task,DeleteTask}) => {
  return (
    <div className='task'>
        <h3>{task.text} <FontAwesomeIcon icon={faTimes}  onClick={()=>DeleteTask(task.id)}/></h3>
        <h3>{task.day}</h3>
    </div>
  )
}

export default Task