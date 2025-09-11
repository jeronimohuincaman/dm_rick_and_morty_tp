import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { globalStyles } from "../../styles";
import Card from "../../components/Card";
import { useCharacter } from "../../hooks/useChararcters";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useFavoritos } from "../../context/FavoritosContext";

export default function Personajes() {
    const { characters, loading, error } = useCharacter();
    const router = useRouter();

    const { favoritos, dispatch } = useFavoritos();

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
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.name}
                        subtitle={item.status}
                        image={item.image}
                        onPress={() => router.push(`/personaje/${item.id}`)}
                        onFavorite={() => toggleFavorito(item)} // función del contexto
                        isFavorite={favoritos.some(fav => fav.id === item.id)} // chequeo
                    />
                )
                }
            />
        </View>
    );
}
