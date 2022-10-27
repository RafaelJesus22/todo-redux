import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Task } from '../task'
import './styles.css'

export const Tasks: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.task)
  const { filter } = useSelector((state: RootState) => state.filter)

  if (tasks.length === 0 || !tasks) {
    return (
      <section id="no-tasks">
        <h2>Você não tem nenhuma tarefa cadastrada para hoje</h2>
      </section>
    )
  }

  return (
    <>
      {filter === "All" ?
        tasks.map(task => <Task {...task} />) :
          filter === "complete" ?
            tasks.filter(task => task.complete).map(task => <Task {...task} />) :
            tasks.filter(task => !task.complete).map(task => <Task {...task} />)
      }
    </>
  )
}