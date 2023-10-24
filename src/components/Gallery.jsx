// must pass title, imageURL and description into each hornedbeast component

import Header from "./Header";

import HornedBeast from "./HornedBeast";

import Footer from "./Footer";

export default function Gallery(props) {
	return (
		<div className="gallery">
			<Header />
      <div className="animalGrid">
			{props.animals.map((animals) => {
				return (
					<HornedBeast
						title={animals.title}
						img={animals.image_url}
						description={animals.description}
					/>
				);
			})
      }
      </div>
			<Footer />
		</div>
	);
}

