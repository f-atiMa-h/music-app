import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

function Body() {
  const [query, setQuery] = useState("");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false); 
  
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      setAlbums([]);
      return;
    }

    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://itunes.apple.com/search", {
          params: { term: query, entity: "album", limit: 10},
        });
        setAlbums(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, [query]);

  return (
    <div className="w-screen min-h-screen ">
       {/* Search bar  */}
      <div className="flex flex-col items-end p-4">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      {/* Grid */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#3a3439]">Albums</h2>

        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!loading && !error && albums.length === 0 && query && (
          <p className="text-gray-400">No albums found.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {albums.map((album) => (
            <div
              key={album.collectionId}
              className="bg-[#3a3439] p-3 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Album cover */}
              <img
                src={album.artworkUrl100.replace("100x100", "300x300")}
                alt={album.collectionName}
                className="w-full rounded-lg mb-2"
              />

              {/* Album info */}
              <h3 className="text-gray-200 font-semibold truncate">
                {album.collectionName}
              </h3>
              <p className="text-gray-400 text-sm truncate">
                {album.artistName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;



