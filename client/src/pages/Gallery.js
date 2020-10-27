import React from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";


function Gallery() {
    return (
    <React.Fragment>
            <Nav />
            <Jumbotron />
    {/* <div className="row"> */}
      <div className="columns">
        <h2>Photo Gallery</h2>
      </div>
      
    <div className="row">
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/View1.jpg" alt="First Ultra Sound."></img>
      </div>
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/View3.jpg" alt="First Ultra Sound."></img>
      </div>
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/HeartBeat.jpg" alt="First Ultra Sound."></img>
      </div>
    </div>

    <div className="row">
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/PumpkinPatch.jpg" alt="Pumpkin Patch 2020."></img>
      </div>
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/mask.jpg" alt="Pumpkin Patch 2020."></img>
      </div>
      <div className="small-4 columns">
        <img className="thumbnail" src="./Images/PumpkinPatch.jpg" alt="Pumpkin Patch 2020."></img>
      </div>
    </div>
  {/* </div> */}
  </React.Fragment>  
    

    
  )
};


export default Gallery;