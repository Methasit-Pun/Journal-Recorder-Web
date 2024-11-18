import express from 'express';
import { getJournals, getJournal, createJournal } from '../controllers/journalController';

const router = express.Router();

router.get('/', getJournals);
router.get('/:id', getJournal);
router.post('/', createJournal);

export default router;
