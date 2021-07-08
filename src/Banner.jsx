import React, { useEffect, useState } from 'react';
import requests from './request';
import axios from './axios';
import './Banner.css';

const Banner = () => {
    const [random, setRandom] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let movie = await axios.get(requests.fetchNetflixoriginals);
            setRandom(movie.data.results[Math.floor(Math.random() * movie.data.results.length - 1) + 1]);
        };
        fetchData();
    }, []);
    console.log(random);

    return <div className="banner">
        <div className="random_info">
            <h1>{random.name}</h1>
            <p>{random.overview}</p>
            <br></br>
            <p>Rating: {random.vote_average}</p>
        </div>
        <img className="banner_img" src={`https://image.tmdb.org/t/p/original/${random.backdrop_path}`} alt="this is banner."></img>
        <div className="fade"></div>
    </div>
};

export default Banner;