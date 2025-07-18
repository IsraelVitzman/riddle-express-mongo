import express from 'express';

import { read } from "../controlessRiddles/read.js";
import { add } from "../controlessRiddles/add.js";
import { update } from "../controlessRiddles/update.js";
import { dalete } from "../controlessRiddles/dalete.js";

const router = express.Router();

export function RouterRiddles() {
  router.post('/addRiddle', (req, res) => {
    add(req, res);

  });

  router.delete('/deleteRiddle', (req, res) => {
    dalete(req, res);

  });

  router.put('/updateRiddle/:id', (req, res) => {
    update(req, res);

  });

  router.get('/getAllRidlles', (req, res) => {
    read(req, res);

  });
  return router

}

