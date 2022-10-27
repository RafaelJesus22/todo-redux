import './styles.css'

interface IconProps {
  complete: boolean
}

export const Icon: React.FC<IconProps> = ({
  complete,
}) => {
  return (
    <div className={!complete ? "icon" : "icon complete"} />
  )
}