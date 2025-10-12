import { useEffect, useState } from "react";
import axios from "axios";

const AlbumsGrid = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                setLoading(true);
                setError(null);

                // You can use any genre or keyword (like “pop”, “rap”, “r&b”, etc.)
                const randomGenre = ["pop", "rnb", "afrobeats", "rap"][
                    Math.floor(Math.random() * 3)
                ];

                const response = await axios.get(
                    `https://itunes.apple.com/search`,
                    {
                        params: {
                            term: randomGenre,
                            entity: "album",
                            limit: 8, // fetch 20 artists
                        },
                    }
                );

                setArtists(response.data.results);
            } catch (err) {
                setError("Failed to load artists.");
            } finally {
                setLoading(false);
            }
        };

        fetchArtists();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[#EAEAEA]">Albums</h2>

            {loading && <p className="text-[#A0A0A0]">Loading albums...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div
                className="
          grid grid-cols-2 gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
            >
                {artists.map((album) => (
                    <div
                        key={album.collectionId}
                        className="bg-[#1A1A1D] rounded-xl p-4 hover:bg-[#242428] transition-colors duration-200 cursor-pointer"
                    >
                        <img
                            src={album.artworkUrl100.replace("100x100", "300x300")}
                            alt={album.collectionName}
                            className="w-full rounded-lg mb-2"
                        />
                        <h3 className="font-medium text-[#EAEAEA] text-center">
                            {album.artistName}
                        </h3>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AlbumsGrid;