import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './home.css';
import Navbar from '../../components/navbar';

function Home() {
    return (
        <h1>{ useSelector(state => state.userEmail) }</h1>
    )
}

export default Home;