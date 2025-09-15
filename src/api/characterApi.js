import api from "./clients";

export const getCharacters = async (filter) => {
    const response = await api.get("/character" + filter);
    return response.data;
}

export const getOneCharacter = async (id) => {
    const response = await api.get("/character/" + id);
    return response.data;
}