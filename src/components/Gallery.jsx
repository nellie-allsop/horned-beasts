import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowSelectedBeast, horns }) {
	const filteredHorns = data.filter(
		(animals) => animals.horns == horns || horns === ""
	);
	return (
		<div className="animalGrid">
			{filteredHorns.map((animals) => {
				return (
					<HornedBeast
						key={animals._id}
						title={animals.title}
						img={animals.image_url}
						description={animals.description}
						handleShowSelectedBeast={handleShowSelectedBeast}
					/>
				);
			})}
		</div>
	);
}
