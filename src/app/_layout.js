// src/app/_layout.js
import { Stack } from "expo-router";
import { FavoritosProvider } from "../context/FavoritosContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <FavoritosProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </FavoritosProvider>
        </ThemeProvider>
    );
}
