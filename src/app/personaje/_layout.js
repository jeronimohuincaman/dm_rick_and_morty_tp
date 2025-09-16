import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../../context/ThemeContext";

export default function PersonajeLayout() {
    const router = useRouter();
    const { isDarkMode, toggleTheme, colors } = useTheme(); // Contexto del tema

    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Detalle del Personaje",
                    headerStyle: { backgroundColor: colors.backgroundColor },
                    headerTintColor: colors.text,
                    headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
                            <Ionicons name="arrow-back" size={24} color={colors.text} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}
