import './index.css'

const HistoryItem = props => {
  const {id, timeAccessed, logoUrl, domainUrl, title, onDelete} = props
  const DeleteHistory = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
      </div>
      <div className="logo-content-container">
        <div className="logoUrl-container">
          <img className="logoUrl" src={logoUrl} alt="domain logo" />
        </div>
        <div className="title-domain-container">
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
        <button
          onClick={DeleteHistory}
          type="button"
          className="delete-container"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
