import express from 'express'
import { RouterRiddles } from './router/routerRiddles.js'
import { RouterPlayer } from './router/routerPlayer.js';

const PORT = process.env.PORT || 3000;
const server = express()

server.use(express.json())
server.use('/riddles', RouterRiddles())
server.use('/player', RouterPlayer())

server.listen(PORT, () => {
    console.log(`Server is listening ...`);
});