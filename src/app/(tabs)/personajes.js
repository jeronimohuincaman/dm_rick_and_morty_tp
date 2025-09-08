import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { globalStyles } from "../../styles";
import Card from "../../components/Card";
import { useCharacter } from "../../hooks/useChararcters";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";

export default function Personajes() {
    const { characters, loading, error } = useCharacter();
    const router = useRouter();

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.name}
                        subtitle={item.gender}
                        image={item.image}
                        onPress={() => router.push(`/personaje/${item.id}`)} // <-- aquí
                    />
                )
                }
            />
        </View>
    );
}
