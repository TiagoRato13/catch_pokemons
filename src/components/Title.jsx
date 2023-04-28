import React from "react";
import imageTitle from "../assets/images/title.png";

function Title() {
  return (
    <div className="title_box">
      <img src={imageTitle} alt="pokemon title" className="title_image" />
    </div>
  );
}

export default Title;
