import { useEffect, useState } from "react";
import { getCharacters } from "../api/characterApi";

export function useCharacter(filter) {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters(filter);
                setCharacters(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, [filter]);

    return { characters, loading, error };
}