import React, { useState } from 'react';
import Recorder from '../components/Recorder';
import JournalList from '../components/JournalList';
import { saveJournal } from '../services/api';

function Home() {
  const [message, setMessage] = useState('');

  const handleTranscribe = async (formData) => {
    const response = await saveJournal(formData);
    setMessage(response.message);
  };

  return (
    <div>
      <h2>Record Your Journal</h2>
      <Recorder onTranscribe={handleTranscribe} />
      <p>{message}</p>
      <h3>Your Journals</h3>
      <JournalList />
    </div>
  );
}

export default Home;
