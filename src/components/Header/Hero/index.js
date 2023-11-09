import React from 'react';
import "./style.css" ;
import Movielogo from "../../../assets/img/Movie img.jpg";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div id='header'>
            <div className='header'>
     <img src={Movielogo} alt="" />
     <div className='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/nowPlaying">Now playing</NavLink>
        <NavLink to= "/upComing">Up coming</NavLink>
        <NavLink to="/TopRated">Top rated</NavLink>
     </div>
     <button>dark</button>
            </div>
        </div>
    );
};

export default Header;