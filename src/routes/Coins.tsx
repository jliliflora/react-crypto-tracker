// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atom";
import { useState } from "react";
import Toggle from "../components/Toggle";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  /* border: 1px solid red; */
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid gray; */
`;

// const Toggle = styled.div`
//   position: fixed;
//   top: 20px;
//   left: 20px;
//   /* border: 1px solid blue; */
// `;

const CoinsList = styled.ul`
  /* border: 1px solid yellow; */
`;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.5s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: flex;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Content = styled.div`
  margin-left: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface ICoinsProps {
  // toggleDark: () => void;
}
// 이제서야 Coins에서 toggleDark 함수를 가지게 된다

function Coins() {
  // const setDarkAtom = useSetRecoilState(isDarkAtom); //setter function은 value를 설정(set)하는 함수
  // const toggleDarkAtom = () => setDarkAtom((prev) => !prev); // 반대값을 리턴해줌으로써 true,false가 왔다갔다 할 수 있음
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  // QueryKey(고유식별자) => 여기서는 "allCoins"

  /*
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      // console.log(json);
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []); */
  //console.log(coins);

  return (
    <Container>
      {/* <Toggle>
        <button onClick={toggleDarkAtom}>Toggle Mode</button>
      </Toggle> */}

      <Toggle />
      {/* 
      <Wrapper>
        <SwitchInput type="checkbox" id="switch" onClick={toggleDarkAtom} />
        <SwitchLabel htmlFor="switch">
          <OnfBtn />
        </SwitchLabel>
      </Wrapper> 
      */}

      <Header>
        <Title>COIN</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  // src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
