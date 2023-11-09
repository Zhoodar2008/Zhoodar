import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from "../../APY_KEY"
import "./style.css"

const NowPlaying = () => {
    const [nowPlaying,SetNowPlaying] = useState([])
    const getNowPlaying = () => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3        `)
        .then(res => {
  console.log(res)
  SetNowPlaying(res.data.results)
        });
    };
console.log(nowPlaying);
    useEffect(() => {
     getNowPlaying()
    }, [])
    return (
        <div id='nowPlaying'>
           <div className='container'>
            <h1>Now Playing</h1>
            <div className='nowPlaying'>
                {
                    nowPlaying.map(el => (
                        <div className='nowPlaying-movie'>
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

export default NowPlaying;

