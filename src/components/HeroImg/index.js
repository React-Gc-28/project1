import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./index.scss";
const HeroImg = () => {
  return (
    <main className='Heroimg'>
        <hr/>
      <div className='Heroimg-main-div'>
        <div className='Heroimg-main-div-1'>
          <h1>Paneri</h1>
        </div>
        <div className='Heroimg-main-div-2'>
          <h2>Creative Mediterranean Cuisine</h2>
          <h3>Mediterranean Cuisine at its Finest</h3>
          <button className='reserves'>
            <NavLink to={"/reserve"}>
              Researve Now
              <AiOutlineArrowRight />
            </NavLink>
          </button>
        </div>
      </div>
      <hr/>
    </main>
  );
};

export default HeroImg;
