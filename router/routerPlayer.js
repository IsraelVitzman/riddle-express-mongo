import express from 'express';
import { NewPlayer } from "../controlessPlayer/addSignUp.js";
import { LoginPlayer } from "../controlessPlayer/addSignUp.js";

const router = express.Router();

export function RouterPlayer() {

    router.post('/newPlayer', (req, res) => {
        NewPlayer(req, res)

    });
    router.post('/login', (req, res) => {
        LoginPlayer(req, res)

    });


    return router

}