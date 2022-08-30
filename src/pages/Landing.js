import React, { useState, useEffect } from 'react';

import Coin from '../components/Coin';
import { getCoin } from '../components/API';
import Loading from '../gif/Loading.gif'

import styles from "../styles/Landing.module.scss";

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data)
        }

        fetchAPI()
    }, [])

    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchResult = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))

    const {container, coinContainer, input, loadBox} = styles

    return (
        <div className={container}>
            <input className={input} type="text" placeholder="Search..." onChange={searchHandler} />
            {
                coins.length ?
                    <div className={coinContainer}>
                        {
                            searchResult.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                            />)
                        }
                    </div> :
                    <div className={loadBox}>
                        <img src={Loading} alt="Loading" />
                    </div>
            }
        </div>
    );
};

export default Landing;