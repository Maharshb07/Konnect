import React from 'react';
import { Typography } from '@mui/material';
import './Login.css';

function Login({ socket, setisJoined, formData, setformData }) {
    // const [formData, setformData] = useState({
    //     username: '',
    //     roomid: ''
    // });

    const handleClick = () => {

        socket.emit('joinRoom', formData)
        setisJoined(true)

    }
    return (
        <div className='loginContainer'>
            <div className='cardContainer'>
                <Typography className='title'>Join a room and start chatting</Typography>
                <div className='inputBox'>
                    <input type='text' className='inputField' placeholder='Enter username' onChange={(e) => setformData({ ...formData, username: e.target.value })} />
                    <input type='number' className='inputField' placeholder='Enter room id' onChange={(e) => setformData({ ...formData, roomid: e.target.value })} />
                </div>
                <button className='roomBtn' onClick={handleClick}>Join Room</button>

            </div>



        </div >
    )
}

export default Login