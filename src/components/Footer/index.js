import React from "react";
import "./styles/index.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-div-1'>
        <img src='/images/Transparent-1024x175.webp' alt='' />
        <p>
          Copyright © 2021 Paneri Creative Mediterranean Cuisine <br />
          <span> Powered by e-Marketing Center</span>
        </p>
      </div>
      <div className='footer-div-2'>
        <ul>
          <li>
            <BsFillTelephoneFill />
            +2340000000000
          </li>
          <li>
            <FaEnvelope />
            example@gmail.com
          </li>
          <li>
            <AiFillEnvironment />
            NO12 react-28 road
          </li>
        </ul>
      </div>
      <div className='footer-div-3'>
        <ul className='icons'>
          <li>
            <BsFacebook />
          </li>
          <li>
            {" "}
            <RiInstagramFill />
          </li>
          <li>
            <BsGithub />
          </li>
        </ul>
        <ul className='text'>
          <li>Privacy</li>
          <li>Term of use</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
