import { useState } from 'react'
import './styles.css'

interface Option {
  name: string;
  active: boolean;
}

export const Footer: React.FC = () => {
  const [options, setOptions] = useState<Array<Option>>([
    {
      name: "Todas",
      active: true,
    },
    {
      name: "A fazer",
      active: false,
    },
    {
      name: "Completas",
      active: false,
    },
  ])

  function handleSelect(option: Option) {
    setOptions(options.map(o => {
      return {
        name: o.name,
        active: o.name === option.name
      }
    }))
  }

  return (
    <footer>
      <span>5 items left</span>
      <div>
        {options.map(option => (
          <p
            onClick={() => handleSelect(option)}
            className={option.active ? 'option-active' : ''}
          >
            {option.name}
          </p>
        ))}
      </div>
      <p>Esconder as completas</p>
    </footer>
  )
}