import { View, Text, ScrollView } from "react-native";
import { globalStyles } from "../../styles";
import Card from "../../components/Card";

export default function Personajes() {
    return (
        <ScrollView style={globalStyles.container}>
            <Card
                title="Rick Sanchez"
                subtitle="Científico loco"
                image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                onPress={() => console.log("Rick seleccionado")}
            />
            <Card
                title="Morty Smith"
                subtitle="Nieto nervioso"
                image="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                onPress={() => console.log("Morty seleccionado")}
            />
        </ScrollView>
    );
}
