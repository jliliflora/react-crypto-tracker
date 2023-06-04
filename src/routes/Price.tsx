import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

function Price() {
  return <Title>price</Title>;
}

export default Price;
