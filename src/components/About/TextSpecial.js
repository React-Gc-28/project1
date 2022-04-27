import styled from "styled-components/macro";
import FrillImage from "./images/frill.png";
import LeafImage from "./images/leaf.png";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 0.75rem;
  align-items: center;
  h1 {
    font-weight: 200;
  }
`;

const CenterReverse = styled(Center)`
  flex-direction: column-reverse;
`;

const TextFrill = ({ text }) => {
  return (
    <Center>
      <h1>{text}</h1>
      <img src={FrillImage} alt={text} />
    </Center>
  );
};

const TextLeaf = ({ text }) => {
  return (
    <CenterReverse>
      <h2>{text}</h2>
      <img src={LeafImage} alt={text} />
    </CenterReverse>
  );
};

const TextCursive = styled.div`
  font-family: "Allura", cursive;
`;

export { TextFrill, TextLeaf, TextCursive };
