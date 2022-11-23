import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Filter } from '../../types';
import { setFilter } from '../../store/slices/filterSlice' 
import { useAppSelector } from '../../store/hooks';
import './styles.css'

interface Option {
  name: string;
  filter: Filter;
}

export const Footer: React.FC = () => {
  const dispatch = useDispatch()

  const { tasks } = useAppSelector(state => state.task)
  const { filter } = useAppSelector(state => state.filter)

  const [options] = useState<Array<Option>>([
    {
      name: "Todas",
      filter: "All",
    },
    {
      name: "A fazer",
      filter: "todo",
    },
    {
      name: "Completas",
      filter: "complete",
    },
  ])

  function handleSelect(option: Option) {
    dispatch(setFilter(option.filter))
  }

  if (!tasks || tasks.length === 0) return null;

  return (
    <footer>
      <span>{tasks.length} {tasks.length === 1 ? "item" : "items"} left</span>
      <div>
        {options.map(option => (
          <p
            onClick={() => handleSelect(option)}
            className={option.filter === filter ? 'option-active' : ''}
          >
            {option.name}
          </p>
        ))}
      </div>
      <p>Esconder as completas</p>
    </footer>
  )
}