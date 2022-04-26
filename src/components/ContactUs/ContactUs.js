import React from "react";
import "./contactus.scss";

const ContactUs = () => {
  return (
    <div>
      <div className="contact">
        <h3>Contact us</h3>

        <form>
          <div className="infos">
            <label>
              First Name <span className="red">*</span>
            </label>
            <input type="text"></input>
          </div>
          <div className="infos">
            <label for="email">
              Email Address <span className="red">*</span>
            </label>
            <input type="email"></input>
          </div>
          <div className="infos">
            <label>Subject</label>
            <input type="text"></input>
          </div>
          <div className="infos">
            <label>Message</label>
            <textarea />
          </div>
          <input className="submit" type="submit" value="SUBMIT"></input>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
