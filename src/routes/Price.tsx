import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinTickers } from "./api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const Overview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 6rem;
  gap: 1rem;
  margin-bottom: 30px;
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

const OverviewItemHalfTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 400;
  color: #a5a5a5;
`;

const PercentChange = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-size: 1.9rem;
  font-weight: 300;
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
  const ChangeData = data?.quotes.USD;

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
            <OverviewItemHalfTitle>1시간 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_1h}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_1h ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
          <OverviewItemHalf>
            <OverviewItemHalfTitle>6시간 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_6h}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_6h ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
          <OverviewItemHalf>
            <OverviewItemHalfTitle>12시간 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_12h}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_12h ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
          <OverviewItemHalf>
            <OverviewItemHalfTitle>24시간 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_24h}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_24h ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
          <OverviewItemHalf>
            <OverviewItemHalfTitle>7일 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_7d}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_7d ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
          <OverviewItemHalf>
            <OverviewItemHalfTitle>30일 전보다</OverviewItemHalfTitle>
            <PercentChange>
              <div>{data?.quotes.USD.percent_change_30d}%</div>
              <div>
                {(data?.quotes?.USD?.percent_change_30d ?? 0) > 0 ? (
                  <FontAwesomeIcon icon={faArrowTrendUp} color="red" />
                ) : (
                  <FontAwesomeIcon icon={faArrowTrendDown} color="Limegreen" />
                )}
              </div>
            </PercentChange>
          </OverviewItemHalf>
        </Overview>
      )}
    </>
  );
}

export default Price;
