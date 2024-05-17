import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState(null);


  // Fetches data from the express server
  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <main>
      <div>Hello World</div>
    </main>
  );
}
