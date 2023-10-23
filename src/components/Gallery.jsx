
// must pass title, imageURL and description into each hornedbeast component

import Header from "./Header";

import HornedBeast from "./HornedBeast";

import Footer from "./Footer";

export default function Gallery(){
  return(
    <div className="gallery">
      <Header />
      <HornedBeast />
      <Footer />
  </div>
  );
}



{/* <HornedBeast description={
  <h2>Sasquatch</h2>
  <img src="./Images/Cute_horns.jpeg" alt="A sasquatch"/>
  <p>A wide eyed sasquatch</p>}/> */}


