
// must pass title, imageURL and description into each hornedbeast component

import Header from "./Header";

import HornedBeast from "./HornedBeast";

import Footer from "./Footer";

export default function Gallery(){
  return(
    <div className="gallery">
      <Header />
      <HornedBeast />
      <HornedBeast />
      <Footer />
  </div>
  );
}


