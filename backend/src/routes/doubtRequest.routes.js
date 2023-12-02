import { Router } from "express";

import {
  createDoubt,
  getAllDoubts,
  getDoubtById,
  getDoubtHistory,
  updateDoubtStatus,
  deleteDoubtById
} from "../controllers/doubtRequest.controller.js";

const router = Router();

router.post('/create-doubt', createDoubt);

router.get('/get-doubts-history', getDoubtHistory);

router.get('/get-all-doubts', getAllDoubts);

router.get('/get-doubt-by-id/:doubtId', getDoubtById);


router.patch('/update-doubt-status/:doubtId', updateDoubtStatus);


router.patch('/delete-doubt/:doubtId', deleteDoubtById);


export default router;
