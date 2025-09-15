// components/Filter.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles";

export default function Filter({ options = [], onSelect }) {
    const [visible, setVisible] = useState(false);

    const handleSelect = (option) => {
        onSelect(option);
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Botón principal */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => setVisible((prev) => !prev)}
            >
                <Text style={styles.buttonText}>Filtros</Text>
                <Ionicons
                    name="filter"
                    size={20}
                    color={colors.background}
                    style={styles.icon}
                />
            </TouchableOpacity>


            {/* Opciones */}
            {visible && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={options}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.option}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
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
        backgroundColor: colors.text,
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: colors.background,
        fontWeight: "bold",
        textAlign: "center",
        marginRight: 6,
    },
    dropdown: {
        marginTop: 8,
        backgroundColor: colors.background,
        borderRadius: 8,
        paddingVertical: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    option: { padding: 10 },
    optionText: { fontSize: 16, color: "#333" },
    icon: {
        marginLeft: 4,
    },
});
