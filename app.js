import express from 'express'
import { Router } from './router/route.js'

const PORT = process.env.PORT || 3000;
const server = express()

server.use(express.json())
server.use(Router())

server.listen(PORT, () => {
    console.log(`Server is listening ...`);
});