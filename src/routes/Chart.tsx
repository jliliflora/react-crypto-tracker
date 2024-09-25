import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinHistory } from "./api";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

interface ICoinId {
  coinId: string;
}

function Chart() {
  // const params = useParams();
  // console.log(params);

  const { coinId } = useOutletContext<ICoinId>();
  console.log(coinId);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <Title>chart</Title>;
}

export default Chart;
