import React from "react";


function Gallery() {
    return (
    <div class="row">
      <div class="columns">
        <h2>Photo Gallery</h2>
      </div>
      
    <div class="row">
      <div class="small-4 columns">
        <img class="thumbnail" src="./Images/View1.jpg" alt="First Ultra Sound."></img>
      </div>
      <div class="small-4 columns">
        <img class="thumbnail" src="./Images/View3.jpg" alt="First Ultra Sound."></img>
      </div>
      <div class="small-4 columns">
        <img class="thumbnail" src="./Images/HeartBeat.jpg" alt="First Ultra Sound."></img>
      </div>
    </div>

    <div class="row">
      <div class="small-4 columns">
        <img class="thumbnail" src="./Images/PumpkinPatch.jpg" alt="Pumpkin Patch 2020."></img>
      </div>
      <div class="small-4 columns">
        <img class="thumbnail" src="./Images/mask.jpg" alt="Pumpkin Patch 2020."></img>
      </div>
      <div class="small-4 columns">
        <img class="thumbnail" src="" alt="Photo of Pluto."></img>
      </div>
    </div>
  </div>
      
    

    
  )
};


export default Gallery;