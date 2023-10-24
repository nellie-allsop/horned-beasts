import {useState} from 'react'

export default function HornedBeast({title, img, description}) {
  const [favourites, setFavourites] = useState(0)

function handleFavourites(){
  setFavourites(favourites+1)
}
	return (
  <div className="hornedBeast">
  <h2>{title}</h2>
  <img src={img} onClick={handleFavourites}/>
  <p>{description}</p>
  <span>❤️{favourites}</span>
  </div>
  )
}

