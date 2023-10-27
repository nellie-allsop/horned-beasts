import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import data from "./Data"
import {useState} from "react"
import SelectedBeast from "./components/SelectedBeast"

function App() {
	const [showBeast, setShowBeast] = useState(false)
	const [shownBeast, setShownBeast] = useState({});
	const handleClose = () => {
		setShowBeast(false)}
	const [horns, setHorns] = useState("");

	function handleShowBeast(beast){
		setShowBeast(!showBeast);
		setShownBeast(beast)
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleFilter(event) {
		setHorns(event.target.value)
	}

	return (
		<div>
			<Header />
			<form onSubmit = {handleSubmit}>
<label> Filter by number of horns </label>
<select id="numHorns" onChange={handleFilter}>
	<option value="">Show all beasts</option>
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="100">100</option>
</select>
</form>
			<Gallery data={data} handleShowSelectedBeast={handleShowBeast} horns={horns} />
			<Footer />
			{showBeast && (<SelectedBeast onClose={handleClose} shownBeast={shownBeast}
			handleShowBeast={handleShowBeast}
			/>
			)}
		</div>
	);
}

export default App;