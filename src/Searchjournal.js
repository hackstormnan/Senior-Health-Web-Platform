import React, { useState } from 'react';
import axios from 'axios';

function JournalSearchForm() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [results, setResults] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/Searchjournal', { title, summary });
      console.log('Data sent to backend successfully');
      setResults(response.data.results)
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }

  };


  return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />
    <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
    />
    <button type="submit">Search</button>
    <ul>
        {results.map((result) => (
        <li key={result.id}> {/* Use a unique identifier as the key */}
            <h3>{result.title}</h3>
            <p>{result.content}</p>
            <p>{result.summary}</p>
           
        </li>
        ))}
    </ul>
    </form>
  );
}

export default JournalSearchForm;
