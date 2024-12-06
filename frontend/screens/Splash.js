import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function Splash({ navigation }) {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (isLoggedIn) {
          navigation.replace("Main");
        } else {
          navigation.replace("Auth");
        }
      } catch (error) {
        navigation.replace("Auth");
      }
    };

    checkAuth();
  }, [isLoggedIn]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});