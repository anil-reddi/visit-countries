import './index.css'

const CountryItem = props => {
  const {countryDetails, ClickVisit} = props
  const {name, isVisited, id} = countryDetails

  const onClickVisit = () => {
    ClickVisit(id)
  }

  return (
    <>
      <li className="country-item">
        <p className="country-name">{name}</p>
        {isVisited ? (
          <p className="visited">Visited</p>
        ) : (
          <button type="button" className="visit-btn" onClick={onClickVisit}>
            Visit
          </button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}
export default CountryItem
