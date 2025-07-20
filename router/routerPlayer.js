import express from 'express';
import { NewPlayer } from "../controlessPlayer/add.js";
import { ReadAllPlayers } from "../controlessPlayer/get.js";

const router = express.Router();

export function RouterPlayer() {


    router.post('/newPlayer', (req, res) => {
        NewPlayer(req, res)

    });

    router.get('/getAllNamePlayers', (req, res) => {
        ReadAllPlayers(req, res)

    });





    return router

}