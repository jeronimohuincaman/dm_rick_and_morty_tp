// src/app/_layout.js
import { Stack } from "expo-router";
import { FavoritosProvider } from "../context/FavoritosContext";
import { ThemeProvider } from "../context/ThemeContext";
import { NetworkProvider } from "../context/NetworkContext";

export default function RootLayout() {
    return (
        <NetworkProvider>
            <ThemeProvider>
                <FavoritosProvider>
                    <Stack screenOptions={{ headerShown: false }} />
                </FavoritosProvider>
            </ThemeProvider>
        </NetworkProvider>
    );
}
