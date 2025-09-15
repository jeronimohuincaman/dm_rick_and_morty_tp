import { View, Text, FlatList } from "react-native";
import { globalStyles } from "../../styles";
import { useFavoritos } from "../../context/FavoritosContext";
import Card from "../../components/Card";
import { useRouter } from "expo-router";

export default function Favoritos() {
    const router = useRouter();
    const { favoritos, dispatch } = useFavoritos();

    const toggleFavorito = (item) => {
        const isFav = favoritos.some(fav => fav.id === item.id);
        dispatch({
            type: isFav ? "REMOVE_FAVORITO" : "ADD_FAVORITO",
            payload: item
        });
    };

    if (favoritos.length === 0) {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}> No hay personajes favoritos ;( </Text>
            </View>
        );
    };


    return (
        <View style={globalStyles.container}>
            <FlatList
                data={favoritos}
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