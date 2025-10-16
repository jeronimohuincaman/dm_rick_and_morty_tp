import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const FavoritosContext = createContext();

const initialState = [];

function favoritosReducer(state, action) {

    switch (action.type) {
        case "ADD_FAVORITO":
            return [...state, action.payload];
        case "REMOVE_FAVORITO":
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return state;
    }
};

export function FavoritosProvider({ children }) {
    const [favoritos, dispatch] = useReducer(favoritosReducer, initialState);

    // Cargar favoritos guardados al iniciar
    useEffect(() => {
        const loadFavoritos = async () => {
            try {
                const stored = await AsyncStorage.getItem("@favoritos");
                if (stored) {
                    dispatch({ type: "SET_FAVORITOS", payload: JSON.parse(stored) });
                }
            } catch (error) {
                console.log("Error al cargar favoritos:", error);
            }
        };
        loadFavoritos();
    }, []);

    // Guardar favoritos cada vez que cambian
    useEffect(() => {
        const saveFavoritos = async () => {
            try {
                await AsyncStorage.setItem("@favoritos", JSON.stringify(favoritos));
            } catch (error) {
                console.log("Error al guardar favoritos:", error);
            }
        };
        saveFavoritos();
    }, [favoritos]);

    return (
        <FavoritosContext.Provider value={{ favoritos, dispatch }}>
            {children}
        </FavoritosContext.Provider>
    );
};

export function useFavoritos() {
    return useContext(FavoritosContext);
};