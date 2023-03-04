import { CardProps } from "../types/utilities.type"
import '../styles/_utilities.scss'

const Card = ({icon, title, count}: CardProps) => {
  return (
    <div className="card__box">
      <div className="card__img"><img src={icon} alt={`#${title}`} /></div>
      <span className="card__title">{title}</span>
      <h4>{count.toLocaleString()}</h4>
    </div>
  )
}

export default Card