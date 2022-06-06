import { io } from 'socket.io-client';
import { useState, useEffect } from 'react';
import './Global.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import useLocalStorage from './Components/hooks/useLocalStorage';

const socket = io('http://localhost:3001')




function App() {
  // const [id, setid] = useLocalStorage("id");


  // useEffect(() => {
  //   socket.on('reply', (data) => {
  //     setrecieved(data)
  //   })
  // }, [socket])
  // const [room, setroom] = useState('');
  // const [username, setusername] = useState('');
  // const sendMessage = () => {
  //   socket.emit('message', { message, room })
  // }
  // const joinRoom = () => {
  //   socket.emit('joinRoom', room)
  // }

  return (
    <>
      <Home socket={socket} />
    </>
  )
}

export default App;
