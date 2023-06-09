const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinTrackers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/trackers/${coinId}`).then((response) =>
    response.json()
  );
}
