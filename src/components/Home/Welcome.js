import React from "react";
import "./index.scss";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Button from "./Button";
const Welcome = () => {
  return (
    <>
      <section className='welcome'>
        <div className='welcome-1'>
          {" "}
          <h1>Welcome</h1>
          <h3>We serve top quality, freshly made Mediation food since 2019</h3>
          <hr />
          <p>
            Paneri was born after our desire to convey our passion, love,
            hospitality and quality of Greek products through our dishes. We
            invite you to taste Delicious Mediterranean cuisine made with a
            wonderful touch of creativeness. Calm environment that will combine
            your gastronomic experience with a relaxed atmosphere.
          </p>
          <div className='img-div'>
            <div className='img'>
              <img
                src='/images/NapoleonSignature2_1050x700-600x400.webp'
                alt='signature'
              />
            </div>

            <div className='bottom_div'>
              <h4>SAVVA $ EVI PERTRIDENA</h4>
              <div className='icons'>
                <BsFacebook />
                <BsGithub />
                <RiInstagramFill />
              </div>
            </div>
          </div>
          <Button text={"MORE ABOUT US"} link={"/about"} />
        </div>
        <div className='welcome-2'>
          {" "}
          <img src='/images/Σχέδιο-χωρίς-τίτλο2-768x1197.jpg' alt='img' />
        </div>
      </section>
      <section className='contactSec'>
        <div>
          <h1>Call us now and make your reservation immediately!</h1>
          <a href='tel:09018127061' className='reserves'>
            <BiPhoneCall />
            Call Us Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Welcome;
