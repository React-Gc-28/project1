import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./styles/index.scss";
const Navbar = () => {
  const [show, setShow] = useState();
  const handleclick = () => {
    setShow(!show);
  };
  return (
    <>
      <nav>
        <div className='img-div'>
          <img
            src='/images/cropped-cropped-cropped-PANERI-small-scaled-1-250x83.webp'
            alt='logo'
          />
        </div>
        <div className='menu'>
          {!show ? (
            <MdMenuBook onClick={() => handleclick()} />
          ) : (
            <MdOutlineRestaurantMenu onClick={() => handleclick()} />
          )}
        </div>
        <div className='list'>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => isActive && "active"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => isActive && "active"}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) => isActive && "active"}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => isActive && "active"}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/reservation"}
                className={`reserve  ${({ isActive }) =>
                  isActive && "active"}`}>
                Reservation
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {show && (
        <section className='dropdown'>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => isActive && "active"}>
                Home
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => isActive && "active"}>
                About us
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to={"/products"}
                className={({ isActive }) => isActive && "active"}>
                Our Menu
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) => isActive && "active"}>
                Contact us
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to={"/reservation"}
                className={` ${({ isActive }) => isActive && "active"}`}>
                Reservation
              </NavLink>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Navbar;
