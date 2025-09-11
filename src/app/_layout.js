// src/app/_layout.js
import { Stack } from "expo-router";
import { FavoritosProvider } from "../context/FavoritosContext";

export default function RootLayout() {
    return (
        <FavoritosProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </FavoritosProvider>
    );
}
