import { Request, Response } from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';

const upload = multer({ dest: 'uploads/' });

export const transcribeVoice = [
  upload.single('audio'),
  async (req: Request, res: Response) => {
    try {
      const audioFilePath = req.file?.path;

      // Replace this with your Speech-to-Text API integration
      const result = await axios.post('https://api.speech-to-text.com/transcribe', {
        file: fs.createReadStream(audioFilePath),
      });

      fs.unlinkSync(audioFilePath); // Clean up the file after processing
      res.json({ transcript: result.data.transcript });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
];
