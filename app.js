import express from 'express'
import { RouterRiddles } from './router/routerRiddles.js'
import { RouterPlayer } from './router/routerPlayer.js';
import { RouterResultGame } from "./router/routerResultGame.js";
import { CreateTables } from "./connectToDB/creatConectMYSQL.js";
const PORT = process.env.PORT || 3000;
const server = express()

server.use(express.json())
CreateTables()
console.log("The request arrived successfully");

server.use('/riddles', RouterRiddles())
server.use('/player', RouterPlayer())
server.use('/resultGame', RouterResultGame())

server.listen(PORT, () => {
    console.log(`Server is listening ...`);
});