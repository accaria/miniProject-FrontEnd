"use client"
import { useState,useEffect} from "react"

export default function SearchBar(){

    const [query,setQuery] = useState('');
    const [debounceQuery,setDebounceQuery] = useState('');

      useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);


  useEffect(() => {
    if (debounceQuery) {
      handleSearch(debounceQuery);
    }
  }, [debounceQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query); 
    }
  };

  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
  };
    return(
    <>
    <div className="w-full mx-auto mt-6">
    <input type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>
    </>
    )
}