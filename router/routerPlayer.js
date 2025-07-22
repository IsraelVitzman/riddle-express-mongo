import express from 'express';
import { NewPlayer } from "../controlessPlayer/add.js";


const router = express.Router();

export function RouterPlayer() {

    router.post('/newPlayer', (req, res) => {
        NewPlayer(req, res)

    });


    return router

}