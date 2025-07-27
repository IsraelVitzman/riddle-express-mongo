import express from 'express';

import { InsertGameResult } from "../controlessResultGame/add.js";
import { GetBestGameResultByUserName } from "../controlessResultGame/getOne.js";
import { GetBestResultsForAllUsers } from "../controlessResultGame/getAll.js";

const router = express.Router();

export function RouterResultGame() {

    router.post('/dataPlayer', (req, res) => {
        InsertGameResult(req, res)
    });


    router.get('/resultBestPlayer/:name', (req, res) => {
        GetBestGameResultByUserName(req, res)

    });

    router.get('/resultBestAllPlayers', (req, res) => {
        GetBestResultsForAllUsers(req, res)

    });



    return router

}