import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Task } from '../task'
import './styles.css'

export const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.task)

  console.log(tasks)

  if (tasks.length === 0 || !tasks) {
    return (
      <section id="no-tasks">
        <h2>Você não tem nenhuma tarefa cadastrada para hoje</h2>
      </section>
    )
  }

  return (
    <>
      {tasks.map(task => (
        <Task {...task} />
      ))}
    </>
  )
}