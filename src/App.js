import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./index.css";
const App = () => {
  const [coins, setcoins] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setcoins(res.data);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);
  //dependency array

  const handlechange = (e) => {
    setsearch(e.target.value);
  };
console.log(coins);
  const filteredcoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a currency</h1>
          <input
            type="text"
            placeholder="search"
            className="coin-input"
            onChange={handlechange}
          />
        </div>
        {filteredcoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              marketcap={coin.total_volume}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
