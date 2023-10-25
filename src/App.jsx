import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import data from "./Data"

function App() {
	return (
		<div>
			<Header />
			<Gallery data={data} />
			<Footer />
		</div>
	);
}

export default App;