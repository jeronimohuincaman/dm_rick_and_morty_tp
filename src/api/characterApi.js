import api from "./clients";

export const getCharacters = async () => {
    const response = await api.get("/character");
    return response.data;
}