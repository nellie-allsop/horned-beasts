import {useState} from 'react'

export default function HornedBeast({title, img, description}) {
  const [favourites, setFavourites] = useState(0)

  const [ShowSelectedBeast, setShowSelectedBeast] = useState()

function handleFavourites(){
  setFavourites(favourites+1)

  function handleShowSelectedBeast() {
    setShowSelectedBeast(true)
  }
}

	return (
  <div className="hornedBeast">
  <h2>{title}</h2>
  <img src={img} onClick={ShowSelectedBeast}/>
  <p>{description}</p>
  <span onClick={handleFavourites}>❤️{favourites}</span>
  </div>
  )
}

