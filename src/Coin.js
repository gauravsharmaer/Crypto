

import React from 'react'
import "./index.css";
const Coin = (props) => {

  return (
    <>
      <div className='coin-container'>
        <div className='coin-row'>
          <div className='coin'>
            <img src={props.image} alt="crypto" />
            <h1>{props.name}</h1>
            <p className='coin-symbol'>{props.symbol}</p>
          </div>
          <div className='coin-data'>
            <p className='coin-price'>${props.price}</p>
            {/* <p className='price-change'>${props.priceChange}</p> */}

            <p className='coin-marketcap'>Mkt cap:-${props.marketcap.toLocaleString()}</p>
            
            {props.priceChange < 0 ? (<p className='price-change-red'>Dec:{props.priceChange}%</p>) : (<p className='price-change-green'>INC:-{props.priceChange}%</p>)}

          </div>
        </div>
      </div>
    </>
  )
}

export default Coin;