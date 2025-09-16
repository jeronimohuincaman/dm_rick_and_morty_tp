// components/Filter.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export default function Filter({ options = [], onSelect }) {
    const { isDarkMode, toggleTheme, colors } = useTheme(); // Contexto del tema
    const [visible, setVisible] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setVisible(false);
    };

    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: colors.backgroundColor }]}
                onPress={() => setVisible((prev) => !prev)}
            >
                <Text style={[styles.buttonText, { color: colors.text }]}>Filtros</Text>
                <Ionicons name="filter" size={24} color={colors.text} style={styles.icon} />
            </TouchableOpacity>

            {visible && (
                <View style={[styles.dropdown, { backgroundColor: colors.backgroundColor }]}>
                    {options.map((option) => (
                        <TouchableOpacity key={option} style={styles.option} onPress={() => handleSelect(option)}>
                            <Text style={[styles.optionText, { color: colors.text }]}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { margin: 10 },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        marginRight: 6,
    },
    dropdown: {
        marginTop: 8,
        borderRadius: 8,
        paddingVertical: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    option: { padding: 10 },
    optionText: { fontSize: 16 },
    icon: { marginLeft: 4 },
});

