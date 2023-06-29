import { useState, useEffect } from 'react';

export default function Home() {
  const [expressData, setExpressData] = useState([]);
  const [fastAPIData, setFastAPIData] = useState([]);

  useEffect(() => {
    // Retrieve data from Express.js backend
    fetch('/api/sample')
      .then((response) => response.json())
      .then((data) => setExpressData(data));

    // Retrieve data from FastAPI backend
    fetch('http://localhost:8000/api/sample')
      .then((response) => response.json())
      .then((data) => setFastAPIData(data.samples));
  }, []);

  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <h2>Data from Express.js backend:</h2>
      <ul>
        {expressData.map((sample) => (
          <li key={sample._id}>{sample.name}</li>
        ))}
      </ul>
      <h2>Data from FastAPI backend:</h2>
      <ul>
        {fastAPIData.map((sample) => (
          <li key={sample[0]}>{sample[1]}</li>
        ))}
      </ul>
    </div>
  );
}
