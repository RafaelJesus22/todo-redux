import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Filter } from '../../types';
import { setFilter } from '../../store/slices/filterSlice' 
import './styles.css'

interface Option {
  name: string;
  filter: Filter;
}

export const Footer: React.FC = () => {
  const dispatch = useDispatch()

  const { tasks } = useSelector((state: RootState) => state.task)
  const { filter } = useSelector((state: RootState) => state.filter)

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