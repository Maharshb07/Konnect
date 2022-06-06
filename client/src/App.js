import { io } from 'socket.io-client';
import './Global.css';
import Home from './Components/Home/Home';

const socket = io('http://localhost:3001')

function App() {

  return (
    <>
      <Home socket={socket} />
    </>
  )
}

export default App;
