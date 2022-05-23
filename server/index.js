const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const http = require('http') // used to connect socket.io with express
const { Server } = require('socket.io')
require('dotenv').config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


const port = process.env.PORT;

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    },
})

io.on('connection', (socket) => {
    console.log(`User id: ${socket.id}`)

    socket.on('joinRoom', (data) => {
        socket.join(data);
    })

    socket.on('message', (data) => {
        console.log(data);
        socket.to(data.room).emit('reply', data);
    })

    // socket.on('disconnect', () => {
    //     console.log('User Disconnected', socket.id)
    // })
})

// server.get('/', (req, res) => {
//     res.send('Hello World!')
// })

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})