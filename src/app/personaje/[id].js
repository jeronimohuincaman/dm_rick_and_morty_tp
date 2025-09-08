import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { getOneCharacter } from "../../api/characterApi";
import { globalStyles } from "../../styles";

export default function PersonajeDetalle() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await getOneCharacter(id);
                setCharacter(response);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);


    if (loading) return <ActivityIndicator size="large" style={{ flex: 1, backgroundColor: globalStyles.container.backgroundColor }} />;

    if (!character) return <Text style={{ backgroundColor: globalStyles.container.backgroundColor }}>No se encontró el personaje</Text>;

    return (
        <View style={styles.container}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text>Status: {character.status}</Text>
            <Text>Species: {character.species}</Text>
            <Text>Gender: {character.gender}</Text>
            <Text>Origin: {character.origin.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", padding: 16, backgroundColor: globalStyles.container.backgroundColor },
    image: { width: 200, height: 200, borderRadius: 12, marginBottom: 16 },
    name: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
});