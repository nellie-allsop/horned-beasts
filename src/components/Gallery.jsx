import HornedBeast from "./HornedBeast";


export default function Gallery({data}) {
	return (
		<div className="animalGrid">
			{data.map((animals) => {
				return (
					<HornedBeast
						key={animals._id}
						title={animals.title}
						img={animals.image_url}
						description={animals.description}
					/>
				);
			})}
		</div>
	);
}
