import { Task as Props} from '../../types'
import './styles.css'


export const Task: React.FC<Props> = ({
  id,
  name,
}) => {
  return (
    <div className="task" id={id}>
      <div className="icon" />
      <p>{name}</p>
    </div>
  )
}