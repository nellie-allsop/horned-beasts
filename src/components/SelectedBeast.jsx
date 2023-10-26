export default function SelectedBeast({shownBeast, handleShowSelectedBeast, onClose}) {
  return (
    <div className="modal" onClick={handleShowSelectedBeast}>
      <h2>{shownBeast.title}</h2>
      <img src={shownBeast.img} />
      <br />
      <button onClick={() => onClose()}>Close</button>
    </div>
  )
}

