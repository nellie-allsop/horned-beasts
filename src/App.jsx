import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import data from "./Data"
import {useState} from "react"
import SelectedBeast from "./components/SelectedBeast"
import Form

function App() {
	const [showBeast, setShowBeast] = useState(false)
	const [shownBeast, setShownBeast] = useState({})
	const handleClose = () => {
		setShowBeast(false)
	}

	function handleShowBeast(beast){
		setShowBeast(!showBeast);
		setShownBeast(beast)
	}

	return (
		<div>
			<Header />
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