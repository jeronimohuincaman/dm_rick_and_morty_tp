// src/styles.js
import { StyleSheet } from "react-native";

export const colors = {
    secondary: "#97ce4c",
    primary: "#f0e14a",
    background: "#44281d",
    text: "#e4a788",
    primary2: "#a6cccc",
    secondary2: "#89847e",
    background2: "#fff",
    text2: "#000"
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    text: {
        fontSize: 16,
    },
});

export const charactersStyles = StyleSheet.create({
    morty: {
        primary: colors.primary,
        secondary: colors.secondary,
        backgroundColor: colors.background,
        text: colors.text
    },
    rick: {
        primary: colors.primary2,
        secondary: colors.secondary2,
        backgroundColor: colors.background2,
        text: colors.text2
    }
});

