import './index.css'

const CardItem = props => {
  const {cardDetails, removeCountry} = props
  const {name, imageUrl, id} = cardDetails

  const onClickRemove = () => {
    removeCountry(id)
  }

  return (
    <li className="card-item">
      <img src={imageUrl} alt="thumbnail" className="card-image" />
      <div className="name-button-container">
        <p className="card-name">{name}</p>
        <button type="button" className="remove-btn" onClick={onClickRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default CardItem
