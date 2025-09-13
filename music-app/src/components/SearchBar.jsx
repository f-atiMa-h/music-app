import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar({ query, setQuery }) {
  const [results, setResults] = useState([]); 
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null); 
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get("https://itunes.apple.com/search", {
          params: { term: query, entity: "song", limit: 8 },
        });

        setResults(response.data.results);
      } catch (err) {
        setError("Failed to fetch results");
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchData, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="p-4 flex justify-end">
      <div className="relative w-full max-w-md sm:w-96">
        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          placeholder="Search songs..."
          className="w-full px-3 py-2 border-2 border-[#30292f] rounded-xl outline-none "
        />

        {/* Dropdown results */}
        {open && query && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-50">
            {loading && <p className="p-2 text-gray-500">Loading...</p>}
            {error && <p className="p-2 text-red-500">{error}</p>}

            <ul className="max-h-64 overflow-y-auto">
              {results.map((track) => (
                <li
                  key={track.trackId}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                  onMouseDown={() => {
                    // update the search bar and parent Body when clicking a song
                    setQuery(track.artistName);
                    setOpen(false);
                  }}
                >
                  <img
                    src={track.artworkUrl60}
                    alt={track.trackName}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="font-medium">{track.trackName}</p>
                    <p className="text-sm text-gray-600">{track.artistName}</p>
                  </div>
                </li>
              ))}

              {results.length === 0 && !loading && (
                <p className="p-2 text-gray-500">No results found</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
