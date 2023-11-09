import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from "../../APY_KEY"
import "./style.css"

const Popular = () => {
    const [popular,SetPopular] = useState([])
    const getPopular = () => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`)
        .then(res => {
  console.log(res)
  SetPopular(res.data.results)
        });
    };
console.log(popular);
    useEffect(() => {
     getPopular()
    }, [])
    return (
        <div id='popular'>
           <div className='container'>
            <h1>Popular</h1>
            <div className='popular'>
                {
                    popular.map(el => (
                        <div className='popular-movie'>
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

export default Popular;