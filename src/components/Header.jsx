import {useState} from "react"

export default function Header() {
	const [cookies, setCookies] = useState(0)

function handleCookies(){
	setCookies(cookies+1)
}
	return (
		<div>
	<h1 className="header">Horned beasts</h1>
	<button onClick={handleCookies}>🍪Click for a biscuit! You currently have {cookies} of them</button>
	</div>
	)
}
