import express from 'express';
import { verifyAdmin, verifyAdminOrUser } from "../token/token.js";
import { Read } from "../controlessRiddles/read.js";
import { Add } from "../controlessRiddles/add.js";
import { Update } from "../controlessRiddles/update.js";
import { Delete } from "../controlessRiddles/dalete.js";

const router = express.Router();

export function RouterRiddles() {
  router.post('/addRiddle', verifyAdminOrUser, (req, res) => {
    Add(req, res);

  });

  router.delete('/deleteRiddle:id', verifyAdmin, (req, res) => {
    Delete(req, res);

  });

  router.put('/updateRiddle/:id', verifyAdmin, (req, res) => {
    Update(req, res);

  });

  router.get('/getAllRiddles', verifyAdminOrUser, (req, res) => {
    Read(req, res);

  });
  router.get('/getAllRiddlesToGame', (req, res) => {
    Read(req, res);

  });
  return router

}

