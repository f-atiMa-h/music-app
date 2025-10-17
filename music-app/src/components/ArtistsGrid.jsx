import { useEffect, useState } from "react";
import axios from "axios";

const ArtistsGrid = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArtists = async () => {
            try {
                setLoading(true);
                setError(null);

                
                const randomGenre = ["pop", "afrobeats", "hiphop", "rnb"][
                    Math.floor(Math.random() * 2)
                ];

                const response = await axios.get(
                    `https://itunes.apple.com/search`,
                    {
                        params: {
                            term: randomGenre,
                            entity: "album",
                            limit: 12, 
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
            <h2 className="text-xl font-semibold mb-4 text-[#EAEAEA]">Artists</h2>

            {loading && <p className="text-[#A0A0A0]">Loading artists...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div
                className="
          grid grid-cols-2 gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
            >
                {artists.map((item) => (
                    <div
                        key={item.collectionId}
                        className="bg-[#1A1A1D] rounded-xl p-4 hover:bg-[#242428] transition-colors duration-200 cursor-pointer"
                    >
                        <img
                            src={item.artworkUrl100.replace("100x100", "300x300")}
                            alt={item.collectionName}
                            className="w-full rounded-lg mb-2"
                        />
                        <h3 className="font-medium text-[#EAEAEA] text-center">
                            {item.artistName}
                        </h3>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ArtistsGrid;
