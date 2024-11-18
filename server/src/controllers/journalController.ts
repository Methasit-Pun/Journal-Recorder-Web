import { Request, Response } from 'express';
import { Journal } from '../models/Journal';

export const getJournals = async (req: Request, res: Response) => {
  const journals = await Journal.find();
  res.json(journals);
};

export const getJournal = async (req: Request, res: Response) => {
  const journal = await Journal.findById(req.params.id);
  if (!journal) return res.status(404).json({ message: 'Journal not found' });
  res.json(journal);
};

export const createJournal = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const journal = new Journal({ title, content });
  await journal.save();
  res.status(201).json(journal);
};
