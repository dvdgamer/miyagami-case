import Image from "next/image";
import { useEffect, useState } from "react";
// import styled from "@emotion/styled";


export default function Home() {
  const [data, setData] = useState(null);


  // Fetches data from the express server
  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);



  // displays Loading while the components are loading
  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <main>
      <div className="container">

        {/* fetches name and image for each card */}
        {data && data.feed.entry.map((item: any) => {
          return (
            <div key={item.id}
            className="p-4 m-4"
            class="cards-container">
              <p>{item.title}</p>
              <Image
                src={item.link[1].$.href}
                alt={item.title}
                width={500}
                height={500}/>
            </div>
          );
        })}

      </div>
    </main>
  );
}
