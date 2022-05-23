import React from 'react';
import './Home.css';
import Login from '../Login/Login';
import { Typography } from '@mui/material';


function Home() {
    return (
        <div className='homeContainer'>
            <div className='brandContainer'>
                <div className='brandWrapper'>
                    <p className='brandName'>Konnect</p>
                    <p className='subtitle'>...with your loved ones</p>
                </div>
            </div>
            <div className='divider' />
            <div className='login'>
                <Login />
            </div>
        </div>
    )
}

export default Home