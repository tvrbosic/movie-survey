import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <div>Hello from React application!</div>
      <div>{!data ? 'Loading ...' : data}</div>
    </div>
  );
}

export default App;
