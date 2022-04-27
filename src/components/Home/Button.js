import { NavLink } from "react-router-dom";
import"./index.scss"
import { AiOutlineArrowRight } from "react-icons/ai";

function Button({ text, link }) {
  return (
    <button className='reserves'>
      <NavLink to={link}>
        {text}
        <AiOutlineArrowRight />
      </NavLink>
    </button>
  );
}

export default Button;
