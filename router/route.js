import express from 'express';

import { read } from "../controlessDB/read.js";
import { add } from "../controlessDB/add.js";
import { update } from "../controlessDB/update.js";
import { dalete } from "../controlessDB/dalete.js";

const router = express.Router();

export function Router() {
  router.post('/post', (req, res) => {
    add(req, res);

  });

  router.delete('/delete', (req, res) => {
    dalete(req, res);

  });

  router.put('/update/:id', (req, res) => {
    update(req, res);

  });

  router.get('/get', (req, res) => {
    read(req, res);
    return router;
  });
  return router

}

