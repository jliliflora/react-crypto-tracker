import { useParams } from "react-router";

interface RouterParams {
  coinId: string;
}

function Coin() {
  // const { params } = useParams()
  // console.log(params); //coinId 잡아내기

  //const { coinId } = useParams<RouterParams>() => 에러남
  const { coinId } = useParams() as unknown as RouterParams;

  return <div>coin : {coinId}</div>;
}

export default Coin;
