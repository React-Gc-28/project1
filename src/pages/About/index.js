import React from "react";
import styled from "styled-components";
import Banner from "../../components/About/Banner";
import InfoShow from "../../components/About/InfoShow";
import Follow from "../../components/About/Follow";
import CounterWrapper from "../../components/About/Counters";
import colors from "../../components/About/colors";
import datas from "../../components/About/fakedata.json";

const MainContainer = styled.main`
  font-family: "Questrial", sans-serif;
  color: ${colors.white};

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
`;

const About = () => {
  return (
    <MainContainer>
      <Banner title='About Us' src='./images/img1.webp' />
      <article>
        {datas.map((data, i) => (
          <InfoShow key={i} {...data} />
        ))}
      </article>
      <Follow />
      <CounterWrapper src='./images/bg2.webp' />
    </MainContainer>
  );
};

export default About;
