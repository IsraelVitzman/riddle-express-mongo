import express from 'express';
import { NewPlayer } from "../controlessPlayer/addNewPlayer.js";
import { AddResult } from "../controlessPlayer/addResultGame.js";
const router = express.Router();

export function RouterPlayer() {
    router.post('/dataPlayer', (req, res) => {
        AddResult(req, res)
    });

    router.post('/cheakPlayer', (req, res) => {
        NewPlayer(req, res)

    });



    return router

}