// components/Card.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../styles";


export default function Card({ title, subtitle, image, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
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
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.text
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        marginTop: 4
    }
});