import './styles.css'

export const AddTask: React.FC = () => {
  return (
    <form>
      <div className="input" >
        <div className="icon" />
        <input type="text" id="add-todo" placeholder="Adicionar tarefa" />
      </div>
    </form>
  )
}