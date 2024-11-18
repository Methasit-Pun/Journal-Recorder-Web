import mongoose, { Schema, Document } from 'mongoose';

interface IJournal extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const journalSchema = new Schema<IJournal>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Journal = mongoose.model<IJournal>('Journal', journalSchema);
