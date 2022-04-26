import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./index.scss";
const Reservation = () => {
  const date = new Date();
  date.setDate(date.getDate().toLocaleString());
  const [defaultValue, setDefaultValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    party: 0,
    date: "",
    time: "",
    checked: false,
  });
  const formRef = useRef();
  const { register, handleSubmit } = useForm();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_mxit5bf",
        "template_iwiyh0i",
        formRef.current,
        "yXs_m-FITMaIFlFSB"
      )
      .then(
        () => {
          alert("Reservation made");
          setDefaultValue({
            firstName: "",
            lastName: "",
            email: "",
            party: 0,
            date: "",
            time: "",
            checked: false,
          });
        },
        (errors) => {
          alert("Message not sent, please Try again");
          console.log(errors);
        }
      );
  };

  return (
    <>
      <div className='formComponent'>
        <h1 className='reserve_title'>
          Make a reservation <hr />
        </h1>

        <form
          className='reserve-form'
          ref={formRef}
          onSubmit={handleSubmit(sendEmail)}>
          <label htmlFor='Name'>
            Enter Your Name
            <input
              {...register("firstName")}
              value={defaultValue.firstName}
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, firstName: target.value })
              }
              type='text'
              name='firstName'
              placeholder='Firstname'
              required
            />
            <input
              {...register("lastName")}
              value={defaultValue.lastName}
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, lastName: target.value })
              }
              type='text'
              name='lastName'
              placeholder='Lastname'
              required
            />
          </label>

          <label htmlFor='Email'>
            Email
            <input
              type='email'
              {...register("email")}
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, email: target.value })
              }
              value={defaultValue.email}
              name='email'
              placeholder='Email'
              required
            />
          </label>
          <label htmlFor='party'>
            Party
            <input
              {...register("party")}
              value={defaultValue.party}
              onChange={({ target }) =>
                setDefaultValue({
                  ...defaultValue,
                  party: target.valueAsNumber,
                })
              }
              type='number'
              name='party'
              placeholder='number of people'
              required
            />
          </label>
          <label htmlFor='DATE'>
            Date
            <input
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, date: target.value })
              }
              {...register("date")}
              type='date'
              required
              name='date'
              id='r'
            />
            <input
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, time: target.value })
              }
              type='time'
              {...register("time")}
              required
              name='time'
              id=''
            />
          </label>
          <div className='checked'>
            <input
              type='checkbox'
              {...register("checked")}
              value={defaultValue.checked}
              name='checked'
              id=''
              required
            />
            <p>Please confirm your reservation with us</p>
          </div>
          <input className='submit' type='submit' value='reserve' />
        </form>
      </div>
    </>
  );
};
export default Reservation;
//
