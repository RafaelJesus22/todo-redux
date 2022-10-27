import { Task as Props} from '../../types'
import { Icon } from '../icon'
import { toggleCompleteTask } from '../../store/slices/tasksSlice'
import { useDispatch } from 'react-redux'
import './styles.css'


export const Task: React.FC<Props> = ({
  id,
  name,
  complete
}) => {
  const dispatch = useDispatch()

  function toggleTask() {
    dispatch(toggleCompleteTask(id))
  }

  return (
    <div className="task" id={id} onClick={toggleTask} >
      <Icon complete={complete} />
      <p className={complete ? "complete" : ""}>{name}</p>
    </div>
  )
}