import styled from "styled-components";
import { TextFrill } from "./TextSpecial";

const Wrapper = styled.section`
  display: flex;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  height: 400px;
  padding-left: 5rem;

  @media screen and (max-width: 600px) {
    padding-left: 1rem;
  }
`;

const Banner = ({ title, src }) => {
  return (
    <Wrapper background={src}>
      <TextFrill text={title} />
    </Wrapper>
  );
};

export default Banner;
