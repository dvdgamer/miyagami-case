import "@/styles/globals.css";

import Home from "@/pages/index";
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  // Fetches data from the express server
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {/* {data} */}
      <Home />
    </div>
  );
}

export default App;
