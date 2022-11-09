// Write your code here.
const CardItem = props => {
  const {eachObject, key} = props
  const {title, description, imgUrl, className} = eachObject
  return (
    <li key={key} className={`card ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
      </div>

      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem
