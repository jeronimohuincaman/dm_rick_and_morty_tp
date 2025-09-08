// src/styles.js
import { StyleSheet } from "react-native";

export const colors = {
    primary: "#97ce4c",
    secondary: "#f0e14a",
    background: "#e4a788",
    text: "#44281d",
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
    },
    text: {
        fontSize: 16,
        color: colors.text,
    },
});
