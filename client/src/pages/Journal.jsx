import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJournal } from '../services/api';

function Journal() {
  const { id } = useParams();
  const [journal, setJournal] = useState(null);

  useEffect(() => {
    async function fetchJournal() {
      const data = await getJournal(id);
      setJournal(data);
    }
    fetchJournal();
  }, [id]);

  if (!journal) return <p>Loading...</p>;

  return (
    <div>
      <h2>{journal.title}</h2>
      <p>{journal.content}</p>
    </div>
  );
}

export default Journal;
