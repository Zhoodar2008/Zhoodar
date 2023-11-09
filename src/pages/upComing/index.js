import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from "../../APY_KEY"
import "./style.css"

const UpComing = () => {
    const [upComing,SetUpComing] = useState([])
    const getUpComing = () => {
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=3        `)
        .then(res => {
  console.log(res)
  SetUpComing(res.data.results)
        });
    };
console.log(upComing);
    useEffect(() => {
     getUpComing()
    }, [])
    return (
        <div id='home'>
        <div className='container'>
            <h1>Up Coming</h1>
            <div className='UpComing'>
            {
                    upComing.map(el => (
                        <div className='upComing'>
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

export default UpComing;