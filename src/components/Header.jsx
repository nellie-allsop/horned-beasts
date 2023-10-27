import {useState} from "react"

export default function Header() {
	const [cookies, setCookies] = useState(0)

function handleCookies(){
	setCookies(cookies+1)
}
	return (
		<header className="header">
	<h1>Horned beasts</h1>
	<button onClick={handleCookies}>
		<p className="buttonText">🍪Click for a biscuit! You currently have {cookies} of them
		</p>
		</button>
	</header>
	);
}
