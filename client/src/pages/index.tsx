import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // Fetches data from the express server
  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  //data.feed.entry[item].

  // console.log("data :", data);

  if (!data) {
    return <div>Loading...</div>;
  }


  return (
    <main>
      {/* generates cards from API */}
      {data && data.feed.entry.map((item: any) => {
        console.log("item: ", item);
        console.log("item: ", item.link[1].$.href);
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <Image
              src={item.link[1].$.href}
              alt={item.title}
              width={100}
              height={100}/>
          </div>
        );
      })}
    </main>
  );
}
