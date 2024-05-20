import { useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

export default function SearchBar(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  // const delayedSearch = debounce(handleSearch, 300);

  return (
    <form style={{  display: "flex", justifyContent: "center", alignItems: "center",}}>
      <input
        style={{
          padding: "10px",
          margin: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "50px",
        }}
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          // delayedSearch();
        }}
        placeholder="Search Flickr photos"
      />
      {/* <button onClick={handleSearch}>Search</button> */}
    </form>
  );
}
