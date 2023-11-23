import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid';
import './TaskForm.css'

const TaskForm = ({addTask}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleSubmitTask = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const task = {title, description, createAt: new Date().toDateString(), id: uuidv4()}
        addTask(task)
        handleCloseModal()
    }

  return (
    <div>

        <button className='btn-agregar' onClick={handleOpenModal}>NUEVA TAREA <FaPlusCircle /></button>
        
        {
            isOpenModal

            &&

            <div className='modal-background'>

            <div className='modal'>

                <h2 className='modal-h2'>AGREGAR NUEVA TAREA</h2>

                <form onSubmit={handleSubmitTask}>

                    <div className="input-container">
                        <label htmlFor="title">Ingresa el titulo de tu tarea</label>
                        <input type="text" id='title' name='title' placeholder='Titulo de la tarea' />
                    </div>

                    <div className="input-container">
                        <label htmlFor="description">Ingrese una descripcion de la tarea</label>
                        <textarea name="description" id="description" placeholder='Describa la tarea a realizar'></textarea>
                    </div>

                    <div className='btn-container'>
                        <button className='btn-cancelar' onClick={handleCloseModal}>Cancelar</button>
                        <button className='btn-agrego' type='submit'>Agregar</button>
                    </div>

                </form>

            </div>

        </div>
        }

        

    </div>
  )
}

export default TaskForm