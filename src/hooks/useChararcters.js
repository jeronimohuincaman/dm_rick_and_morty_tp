import { useEffect, useState } from "react";
import { getCharacters } from "../api/characterApi";

export function useCharacter() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return { characters, loading, error };
}