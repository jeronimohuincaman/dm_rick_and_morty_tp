// src/app/(tabs)/configuracion.js
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useTheme } from "../../context/ThemeContext"; // ajusta la ruta según tu proyecto

export default function Configuracion() {
    const { isDarkMode, toggleTheme, colors } = useTheme(); // Contexto del tema

    // Funciones para las acciones de botones
    const borrarDatosDeNavegacion = () => Alert.alert("Navegación", "Función aún no implementada");
    const openDev = () => console.log("Abrir información del desarrollador");

    const openLink = async () => {
        const url = "https://github.com/jeronimohuincaman/dm_rick_and_morty_tp.git";
        await WebBrowser.openBrowserAsync(url);
    };

    // Componente reutilizable para Sección
    const Section = ({ title, children }) => (
        <View style={styles.section}>
            <Text style={{ ...styles.sectionTitle, color: colors.text }}>{title}</Text>
            {children}
        </View>
    );

    // Componente reutilizable para Opción con Switch
    const OptionSwitch = ({ label, value, onValueChange }) => (
        <View style={styles.option}>
            <Text style={{ ...styles.optionText, color: colors.text }}>{label}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: colors.backgroundColor, true: colors.text }}
                thumbColor={colors.text}
            />
        </View>
    );

    // Componente reutilizable para Opción con botón
    const OptionButton = ({ label, onPress }) => (
        <TouchableOpacity style={styles.option} onPress={onPress}>
            <Text style={{ ...styles.optionText, color: colors.text }}>{label}</Text>
        </TouchableOpacity>
    );

    return (
        <ScrollView style={{ flex: 1, backgroundColor: colors.primary, padding: 16 }}>
            <Section title="Preferencias">
                <OptionSwitch label="Modo oscuro" value={isDarkMode} onValueChange={toggleTheme} />
                <OptionButton label="Borrar datos de navegación" onPress={borrarDatosDeNavegacion} />
            </Section>

            <Section title="Documentación">
                <OptionButton label="¿Quién hizo la app?" onPress={openDev} />
                <OptionButton label="Repositorio" onPress={openLink} />
            </Section>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
    },
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    optionText: {
        fontSize: 16,
    },
});