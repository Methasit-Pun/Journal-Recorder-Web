import express from 'express';
import { transcribeVoice } from '../controllers/voiceController';

const router = express.Router();

router.post('/', transcribeVoice);

export default router;
