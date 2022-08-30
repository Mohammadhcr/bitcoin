import React from 'react';

import styles from "../styles/Coin.module.scss";

const Coin = (props) => {

    const {name, image, symbol, price, priceChange} = props;
    const {coin, coinLogo, coinName, coinSymbol, coinCurrentPrice, greenPriceChange, redPriceChange} = styles;

    return (
        <div className={coin}>
            <img className={coinLogo} src={image} alt={name} />
            <span className={coinName}>{name}</span>
            <span className={coinSymbol}>{symbol.toUpperCase()}</span>
            <span className={coinCurrentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? greenPriceChange : redPriceChange}>{priceChange.toFixed(2)}</span>
        </div>
    );
};

export default Coin;