import React, { useEffect, useState } from 'react'

import './App.css'
import { TaskForm, TaskList } from './components'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  
  const [tasks, setTasks] = useState([])

  const [currentTasks, setCurrentTasks] = useState([])

  const [searchString, setSearchString] = useState('')

  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const handleChangeFilter = (e) => {
    setSearchString(e.target.value)
  }

  useEffect(() => {
    setCurrentTasks(tasks.filter(task => 
      task.title.toLowerCase().includes(searchString.toLowerCase())
      ||
      task.description.toLowerCase().includes(searchString.toLowerCase())
      ))
  },[searchString, tasks]) 

  return (
    <div className='cuerpo'>
    <Header/>

    <div className='controls'>
      <input type="text" placeholder='Buscar tareas' value={searchString} onChange={(handleChangeFilter)}/>
        <TaskForm addTask={addTask}/>
    </div>
    
    <TaskList tasks={currentTasks} deleteTask={deleteTask}/>
    <Footer/>

    </div>
  )
}

export default App
