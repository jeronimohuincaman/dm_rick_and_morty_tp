// components/Card.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export default function Card({ title, subtitle, image, onPress, onFavorite, isFavorite }) {
    const { isDarkMode, toggleTheme, colors } = useTheme(); // Contexto del tema

    return (
        <TouchableOpacity style={[styles.card, { backgroundColor: colors.backgroundColor }]} onPress={onPress} activeOpacity={0.8}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.content}>
                <View style={styles.headerRow}>
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                    <TouchableOpacity onPress={onFavorite}>
                        <Ionicons
                            name={isFavorite ? "heart" : "heart-outline"}
                            size={24}
                            color={isFavorite ? "red" : "#666"}
                        />
                    </TouchableOpacity>
                </View>
                {subtitle && <Text style={[styles.subtitlem, {color: colors.text}]}>{subtitle}</Text>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3
    },
    image: {
        width: "100%",
        height: 150
    },
    content: {
        padding: 12
    },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginTop: 4
    }
});