import express from 'express';

import { Read } from "../controlessRiddles/read.js";
import { Add } from "../controlessRiddles/add.js";
import { Update } from "../controlessRiddles/update.js";
import { Delete } from "../controlessRiddles/dalete.js";

const router = express.Router();

export function RouterRiddles() {
  router.post('/addRiddle', (req, res) => {
    Add(req, res);

  });

  router.delete('/deleteRiddle', (req, res) => {
    Delete(req, res);

  });

  router.put('/updateRiddle/:id', (req, res) => {
    Update(req, res);

  });

  router.get('/getAllRidlles', (req, res) => {
    Read(req, res);

  });
  return router

}

