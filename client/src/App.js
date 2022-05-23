import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import './Global.css';
import Chat from './Components/Chat/Chat';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';

const socket = io('http://localhost:3001')




function App() {

  // useEffect(() => {
  //   socket.on('reply', (data) => {
  //     setrecieved(data)
  //   })
  // }, [socket])
  const [room, setroom] = useState('');
  const [username, setusername] = useState('');
  // const sendMessage = () => {
  //   socket.emit('message', { message, room })
  // }
  const joinRoom = () => {
    socket.emit('joinRoom', room)
  }

  return (
    <div >
      <Home socket={socket} />
    </div>
  );
}

export default App;
