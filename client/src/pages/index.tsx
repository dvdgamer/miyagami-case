import Image from "next/image";
import { useEffect, useState } from "react";
import Feed from "../components/Feed";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

// Defines the shape of the data from the API
export interface FeedItem {
  id: string;
  title: string;
  link: { $: { href: string } }[];
}

// Defines the structure of the data received from the API
interface Data {
  feed: {
    entry: FeedItem[];
  };
}

export default function Home() {
  // Initializes state to hold the data from the API
  const [data, setData] = useState<Data | null>(null);

  // Fetches data from the express server
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  // Displays Loading while the components are loading
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <SearchBar />
      <Feed>
        {/* Maps over the feed items and create a card for each one */}
        {data.feed.entry.map((item: FeedItem) => {
            return <Card key={item.id} item={item} />;
          }
        )}
      </Feed>
    </main>
  );
}
