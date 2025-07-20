import express from 'express';

import { AddResult } from "../controlessResultGame/add.js";
import { ReadAllPlayers } from "../controlessPlayer/get.js";

const router = express.Router();

export function RouterResultGame() {

    router.post('/dataPlayer', (req, res) => {
        AddResult(req, res)
    });

    
    
    router.get('/getAllDataPlayers', (req, res) => {
        ReadAllPlayers(req, res)

    });



    return router

}