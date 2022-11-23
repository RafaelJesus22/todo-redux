import { useEffect, useState } from 'react'
import moment from 'moment'
import './styles.css'

export const Header: React.FC = () => {
  const [now, setNow] = useState(moment(new Date()).format('DD/MM/YYYY hh:mm:ss'))

  const interval = setInterval(() => {
    setNow(moment(new Date()).format('DD/MM/YYYY hh:mm:ss'))
  }, 1000)

  useEffect(() => {

    return clearInterval(interval)
  }, [])

  return (
    <header>
      <h1>Minhas tarefas</h1>
      <div>
        <h1>{now.split(" ")[0]}</h1>
        <h1>{now.split(" ")[1]}</h1>
      </div>
    </header>
  )
}