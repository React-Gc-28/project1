import React from "react";
import Button from "../Home/Button";

import "./index.scss";
const HeroImg = () => {
  return (
    <main className='Heroimg'>
      <hr />
      <div className='Heroimg-main-div'>
        <div className='Heroimg-main-div-1'>
          <h1>Paneri</h1>
        </div>
        <div className='Heroimg-main-div-2'>
          <h2>Creative Mediterranean Cuisine</h2>
          <h3>Mediterranean Cuisine at its Finest</h3>
          <Button text={"RESERVE NOW"} link={"/reservation"} />
        </div>
      </div>
      <hr />
    </main>
  );
};

export default HeroImg;
