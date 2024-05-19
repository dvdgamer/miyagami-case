import { useState } from 'react';
import { debounce } from 'lodash';


export default function SearchBar(): React.FC {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm);
  };

  const delayedSearch = debounce(handleSearch, 300);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          delayedSearch();
        }}
        placeholder="Search Flickr photos"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
