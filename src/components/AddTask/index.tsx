import React, { useId, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/slices/tasksSlice'
import { Task } from '../../types'
import './styles.css'

type FormEvent = React.SyntheticEvent;

export const AddTask: React.FC = () => {
  const [taskName, setTaskName] = useState("")

  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      id: '123',
      name: taskName,
      complete: false,
      date: new Date(),
    }

    dispatch(addTask(newTask));
  }

  return (
    <form onSubmit={(event: FormEvent) => handleSubmit(event)}>
      <div className="input" >
        <div className="icon" />
        <input
          type="text"
          id="add-todo"
          placeholder="Adicionar tarefa"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          autoComplete="off"
        />
      </div>
    </form>
  )
}