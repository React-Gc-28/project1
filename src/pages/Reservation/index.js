import React from "react";
import "./index.scss";
const Reservation = () => {
  return (
    <>
      <div className='formComponent'>
        <h1 className='reserve_title'>
          Make a reservation <hr />
        </h1>

        <form className='reserve-form'>
          <label htmlFor='Name'>
            Enter Your Name
            <input
              type='text'
              name='Firstname'
              placeholder='Firstname'
              required
            />
            <input
              type='text'
              name='Lastname'
              placeholder='Lastname'
              required
            />
          </label>

          <label htmlFor='Email'>
            Email
            <input type='email' name='Email' placeholder='Email' required />
          </label>
          <label htmlFor='party'>
            Party
            <input type='number' required name='party' id='' />
          </label>
          <label htmlFor='DATE'>
            Date
            <input type='date' required name='date' id='r' />
            <input type='time' required name='' id='' />
          </label>
          <div className='checked'>
            <input type='checkbox' name='checked' id='' required />
            <p>Please confirm your reservation with us</p>
          </div>
          <input className=' submit' type='submit' value='reserve' />
        </form>
      </div>
    </>
  );
};
export default Reservation;
