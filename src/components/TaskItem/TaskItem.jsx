import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, deleteTask}) => {
  return (
      
          <div className='conte-targe'>
            <div className='tarjeta'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span>{task.createAt}</span>
            <button className='btn-finalizar' onClick={() => deleteTask(task.id)}>Finalizar</button>
            <hr />
          </div>
          </div>
  )
}

export default TaskItem