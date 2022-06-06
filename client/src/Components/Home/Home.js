import React, { useState } from 'react';
import './Home.css';
import Login from '../Login/Login';
import Chat from '../Chat/Chat';
import { Typography } from '@mui/material';
import useLocalStorage from '../hooks/useLocalStorage';


function Home({ socket }) {
    const [isJoined, setisJoined] = useState(false);
    const [formData, setformData] = useState({
        username: '',
        roomid: ''
    });



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
                {
                    isJoined ? <Chat
                        socket={socket}
                        username={formData.username}
                        room={formData.roomid}
                    /> :
                        <Login socket={socket}
                            setisJoined={setisJoined}
                            formData={formData}
                            setformData={setformData} />
                }

            </div>
        </div>
    )
}

export default Home