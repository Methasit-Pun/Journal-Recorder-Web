import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJournals } from '../services/api';

function JournalList() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    async function fetchJournals() {
      const data = await getJournals();
      setJournals(data);
    }
    fetchJournals();
  }, []);

  return (
    <ul>
      {journals.map((journal) => (
        <li key={journal.id}>
          <Link to={`/journal/${journal.id}`}>{journal.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default JournalList;
