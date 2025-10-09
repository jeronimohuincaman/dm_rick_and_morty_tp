import React, { createContext, useContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { StyleSheet, Text, View } from "react-native";

const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            const hasConnection = state.isConnected && state.isInternetReachable !== false;
            setIsConnected(hasConnection);
            console.log("Network state:", state);
        });

        return () => unsubscribe();
    }, []);

    return (
        <NetworkContext.Provider value={{ isConnected }}>
            <View style={{ flex: 1 }}>
                {!isConnected && (
                    <View style={styles.banner}>
                        <Text style={styles.text}>🚫 Sin conexión a Internet</Text>
                    </View>
                )}
                {children}
            </View>
        </NetworkContext.Provider>
    );
};

export const useNetwork = () => useContext(NetworkContext);

const styles = StyleSheet.create({
    banner: {
        backgroundColor: "red",
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
    },
});
