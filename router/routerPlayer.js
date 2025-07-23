import express from 'express';

import { LoginPlayer } from "../controlessPlayer/addLogin.js";

const router = express.Router();

export function RouterPlayer() {


    router.post('/login', (req, res) => {
        LoginPlayer(req, res)

    });


    return router

}