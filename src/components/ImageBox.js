import React from "react"
import HeroImage from "../images/img1.jpg"

export default function ImageBox (){
    return(
        <div class="img-box">
       <img
            src={HeroImage}
            alt="sandal image" 
             />
      </div>
    )
}