import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./contactus.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ContactUs = () => {
  const [defaultValue, setDefaultValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef();
  const { register, handleSubmit } = useForm();
  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_mxit5bf",
        "template_7voxg2m",
        formRef.current,
        "yXs_m-FITMaIFlFSB"
      )
      .then(
        () => {
          alert("Message sent successfully");
          setDefaultValue({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (errors) => {
          alert("Message not sent, please Try again");
          console.log(errors);
        }
      );
  };
  return (
    <div>
      <div className='contact'>
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit(sendEmail)} ref={formRef}>
          <div className='infos'>
            <label>
              First Name <span className='red'>*</span>
            </label>
            <input
              {...register("fullName")}
              value={defaultValue.name}
              name='name'
              type='text'
              required
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, name: target.value })
              }></input>
          </div>
          <div className='infos'>
            <label htmlFor='email'>
              Email Address <span className='red'>*</span>
            </label>
            <input
              value={defaultValue.email}
              type='email'
              name='email'
              {...register("email", { required: true })}
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, email: target.value })
              }></input>
          </div>
          <div className='infos'>
            <label>Subject</label>
            <input
              type='text'
              value={defaultValue.subject}
              {...register("subject", { required: true })}
              name='subject'
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, subject: target.value })
              }></input>
          </div>
          <div className='infos'>
            <label>Message</label>
            <textarea
              value={defaultValue.message}
              required
              {...register("message", { required: true })}
              name='message'
              onChange={({ target }) =>
                setDefaultValue({ ...defaultValue, message: target.value })
              }
            />
          </div>
          <input className='submit' type='submit' value='SUBMIT'></input>
        </form>{" "}
        <AnimationOnScroll animateIn='animate__slideInLeft' duration={2}>
          <div className='map'>
            <h1 className='title'>Visit us</h1>
            <MapContainer
              center={[6.70247818276993, 3.4265800630055963]}
              zoom={12}
              dragging={false}>
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={[6.70247818276993, 3.4265800630055963]}>
                <Popup>Find PANERI Here😊😊</Popup>
              </Marker>
            </MapContainer>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default ContactUs;
