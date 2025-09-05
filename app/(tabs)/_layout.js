// app/(tabs)/_layout.js
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: colors.text },
                headerTintColor: colors.background,
                headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
                tabBarStyle: { backgroundColor: colors.text },
                tabBarActiveTintColor: colors.background,
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
        </Tabs>
    );
}
