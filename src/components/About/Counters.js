import styled from "styled-components";
import useCounter from "./lib/multi-animated-counter";
import { TextFrill } from "./TextSpecial";

const Wrapper = styled.article`
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.background});
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  gap: 1rem;
  text-align: center;

  & > p {
    font-family: "Allura", cursive;
    font-size: 5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const CountList = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 4rem;

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    grid-template-columns: auto;
  }
`;

const Countbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  & > :first-child {
    font-size: 5rem;
    font-weight: bold;
  }
`;

const Count = ({ text, num }) => {
  return (
    <Countbox>
      <span className='counter' {...{ "data-targetnum": num }}></span>
      <span>{text}</span>
    </Countbox>
  );
};

const CounterWrapper = ({ src }) => {
  useCounter(src);
  return (
    <Wrapper background={src}>
      <p>Counter</p>
      <TextFrill text='QUALITY COMBINED WITH QUANTITY' />
      <CountList id='vector_counter'>
        {Array(1)
          .fill(0)
          .map((v, i) => (
            <Count key={i} text='Appertizer Served' num='1238' />
          ))}
      </CountList>
      <CountList id='vector_counter'>
        {Array(1)
          .fill(0)
          .map((v, i) => (
            <Count key={i} text='Salads Served' num='138' />
          ))}
      </CountList>
      <CountList id='vector_counter'>
        {Array(1)
          .fill(0)
          .map((v, i) => (
            <Count key={i} text='Desserts Served' num='45' />
          ))}
      </CountList>
      <CountList id='vector_counter'>
        {Array(1)
          .fill(0)
          .map((v, i) => (
            <Count key={i} text='Main courses Served' num='2000' />
          ))}
      </CountList>
    </Wrapper>
  );
};

export default CounterWrapper;
