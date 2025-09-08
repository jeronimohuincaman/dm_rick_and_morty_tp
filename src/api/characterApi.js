import api from "./clients";

export const getCharacters = async () => {
    const response = await api.get("/character");
    return response.data;
}

export const getOneCharacter = async (id) => {
    const response = await api.get("/character/" + id);
    return response.data;
}