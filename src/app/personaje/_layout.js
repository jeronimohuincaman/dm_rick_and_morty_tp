import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "../../styles";

export default function PersonajeLayout() {
    const router = useRouter();

    return (
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    title: "Detalle del Personaje",
                    headerStyle: { backgroundColor: colors.text },
                    headerTintColor: colors.background,
                    headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
                            <Ionicons name="arrow-back" size={24} color={colors.background} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}
