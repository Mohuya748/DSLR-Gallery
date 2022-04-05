import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav sticky bg-slate-600 drop-shadow-sm  gap-4 px-12 py-2 flex justify-center'>
            <Link to="/home">HOME</Link>
            <Link to="/reviews">REVIEWS</Link>
            <Link to="/blogs">BLOGS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/dashboard">DASHBOARD</Link>

        </nav>

    );
};

export default Header;