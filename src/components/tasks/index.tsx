import { useAppSelector } from '../../store/hooks'
import { Task } from '../task'
import './styles.css'

export const Tasks: React.FC = () => {
  const { tasks } = useAppSelector(state => state.task)
  const { filter } = useAppSelector(state => state.filter)

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