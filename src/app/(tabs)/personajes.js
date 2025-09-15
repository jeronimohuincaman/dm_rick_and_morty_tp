import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { globalStyles } from "../../styles";
import { useCharacter } from "../../hooks/useChararcters";
import { useFavoritos } from "../../context/FavoritosContext";
import Filter from "../../components/Fitler";
import Card from "../../components/Card";

export default function Personajes() {
    const router = useRouter();
    const [filter, setFilter] = useState("All");

    const query = filter === "All" ? "" : `?status=${filter}`;
    const { characters, loading, error } = useCharacter(query);
    const { favoritos, dispatch } = useFavoritos();

    const filtered = characters/* characters.filter((p) => filter === "All" ? true : p.status === filter) */; // Si se prefiere un listado local sin llamado al backend, descomentar esta linea

    const toggleFavorito = (item) => {
        const isFav = favoritos.some(fav => fav.id === item.id);
        dispatch({
            type: isFav ? "REMOVE_FAVORITO" : "ADD_FAVORITO",
            payload: item
        });
    };

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <View style={globalStyles.container}>
            {/* Filtro */}
            <Filter
                options={["All", "Alive", "Dead", "unknown"]}
                onSelect={(option) => setFilter(option)}
            />

            {/* Listado */}
            <FlatList
                data={filtered}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.name}
                        subtitle={item.status}
                        image={item.image}
                        onPress={() => router.push(`/personaje/${item.id}`)}
                        onFavorite={() => toggleFavorito(item)}
                        isFavorite={favoritos.some(fav => fav.id === item.id)}
                    />
                )}
            />
        </View>
    );
}
