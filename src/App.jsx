import "./App.css";
import Gallery from "./components/Gallery";
import animalArray from "./Data";

function App() {
	return (
		<div>
			<Gallery animals={animalArray} />
		</div>
	);
}

export default App;
