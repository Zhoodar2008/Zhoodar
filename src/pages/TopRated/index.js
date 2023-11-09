import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from "../../APY_KEY"
import "./style.css"

const TopRated = () => {
    const [TopRated,SetTopRated] = useState([])
    const getTopRated = () => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`)
        .then(res => {
  console.log(res)
  SetTopRated(res.data.results)
        });
    };
console.log(TopRated);
    useEffect(() => {
     getTopRated()
    }, [])
    return (
        <div id='home'>
        <div className='container'>
            <h1>Top Rated</h1>
            <div className='TopRated'>
            {
                    TopRated.map(el => (
                        <div className='topRated'>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                            {/* <h1>{el.title}</h1> */}
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
    );
};

export default TopRated;