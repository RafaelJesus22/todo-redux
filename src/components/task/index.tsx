import './styles.css'

interface TaskProps {
  task: string;
  completed: boolean
}

export const Task: React.FC<TaskProps> = ({
  task
}) => {
  return (
    <div className="task" id={task}>
      <div className="icon" />
      <p>{task}</p>
    </div>
  )
}