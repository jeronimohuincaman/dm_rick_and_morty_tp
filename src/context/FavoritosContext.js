import React, { createContext, useContext, useReducer } from 'react';

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

    return (
        <FavoritosContext.Provider value={{ favoritos, dispatch }}>
            {children}
        </FavoritosContext.Provider>
    );
};

export function useFavoritos() {
    return useContext(FavoritosContext);
};