
import React, { useEffect, useState } from 'react';

import "./style.css"

const Home = () => {
    return (
        <div className='containerHome'>
            <div className='HomeHero'>
         <h1>Добро пожаловать.</h1>
         <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
         <input type="text" placeholder='Найти фильм,сериал,персону...' />
         <button>Search</button>
            </div>
        </div>
    );
};

export default Home;

