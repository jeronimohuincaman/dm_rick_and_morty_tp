// app/(tabs)/_layout.js
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

export default function TabsLayout() {
    const { isDarkMode, toggleTheme, colors } = useTheme(); // Contexto del tema

    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: colors.backgroundColor },
                headerTintColor: colors.text,
                headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
                tabBarStyle: { backgroundColor: colors.backgroundColor },
                tabBarActiveTintColor: colors.text,
                tabBarInactiveTintColor: "#999",
            }}
        >
            <Tabs.Screen
                name="personajes"
                options={{
                    title: "Personajes",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="favoritos"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="configuracion"
                options={{
                    title: "Configuración",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
