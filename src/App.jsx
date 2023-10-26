import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import data from "./Data"
import {useState} from "react"
import SelectedBeast from "./components/SelectedBeast"

function App() {
	const [showBeast, setShowBeast] = useState(false)
	const [shownBeast, setShownBeast] = useState({})
	const handleClose = () => {
		setShowBeast(false)
	}
	const [form, setForm]=useState({
		numHorns: "",
	})

	function handleShowBeast(beast){
		setShowBeast(!showBeast);
		setShownBeast(beast)
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value})
	}

	return (
		<div>
			<Header />
			<form onsubmit = {handleSubmit}>
<label> Filter by number of horns </label>
<input name="numHorns" list="numHorns" onChange={handleChange}/>
<datalist id="numHorns">
	<option value="1"></option>
	<option value="2"></option>
	<option value="3"></option>
	<option value="100"></option>
</datalist>
<button>Submit</button>
</form>
			<Gallery data={data} handleShowSelectedBeast={handleShowBeast} />
			<Footer />
			{showBeast && (<SelectedBeast onClose={handleClose} shownBeast={shownBeast}
			handleShowBeast={handleShowBeast}
			/>
			)}
		</div>
	);
}

export default App;