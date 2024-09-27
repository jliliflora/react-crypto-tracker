import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Overview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 6rem;
  gap: 1rem;
`;

const OverviewItem = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  grid-area: 1 / 1 / 2 / 3;
  padding: 1.2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme.overviewBgColor};
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.12);
  font-size: 2.2rem;
  font-weight: normal;
  div:first-child {
    font-size: 0.9rem;
    font-weight: 400;
    color: #a5a5a5;
    line-height: 1.2rem;
  }
`;

const OverviewItemHalf = styled.div`
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.7rem;
  background-color: ${(props) => props.theme.overviewBgColor};
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.12);
`;

interface ICoinId {
  coinId: string;
}
interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { coinId } = useOutletContext<ICoinId>();
  // console.log("price--", coinId);
  // const { isLoading, data } = useQuery<PriceData[]>(["tickers", coinId], () =>
  //   fetchCoinTickers(coinId)
  // );
  const { isLoading, data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );

  return (
    <>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Overview>
          <OverviewItem>
            <div>
              {data?.quotes.USD.ath_date &&
                new Date(data.quotes.USD.ath_date).toLocaleString()}
              <br />
              최고가 달성
            </div>
            <div>${data?.quotes.USD.ath_price.toFixed(3)}</div>
          </OverviewItem>
          <OverviewItemHalf>
            <div>
              <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
            </div>
          </OverviewItemHalf>
          <OverviewItemHalf>3</OverviewItemHalf>
          <OverviewItemHalf>4</OverviewItemHalf>
          <OverviewItemHalf>5</OverviewItemHalf>
          <OverviewItemHalf>6</OverviewItemHalf>
          <OverviewItemHalf>6</OverviewItemHalf>
        </Overview>
      )}
    </>
  );
}

export default Price;
