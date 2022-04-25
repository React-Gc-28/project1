import styled from "styled-components";
import { TextLeaf } from "./TextSpecial";
import colors from "./colors";

const Wrapper = styled.section`
  display: grid;
  /*grid-template-columns:1fr 1fr;*/
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  flex-direction: column;
  align-items: center;
  grid-gap: 3rem;
  padding: 5rem;
  background-color: ${colors.c1};
  @media screen and (max-width: 600px) {
  }
  &:nth-child(even) {
    background-color: ${colors.c2};
  }

  &:nth-child(odd) > :first-child {
    order: 1;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 2rem;
    padding: 3rem 0.75rem;
    display: flex;
    flex-direction: column;
    &:last-child {
      flex-direction: column-reverse;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  grid-gap: 1.2rem;
  text-align: center;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 75vmin;
  margin: auto;
  border-radius: 1.5rem;
  transition: all 0.5s ease-in;

  @media screen and (max-width: 768px) {
    max-height: 100vmin;
  }
`;

const InfoShow = ({ title, body, src }) => {
  return (
    <Wrapper>
      <Container>
        <TextLeaf text={title} />
        <p>{body}</p>
      </Container>
      <Image src={src}></Image>
    </Wrapper>
  );
};

export default InfoShow;
