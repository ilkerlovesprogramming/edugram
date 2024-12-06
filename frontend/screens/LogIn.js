import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { login } from "../api/auth";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login(email, password);
      await signIn(response.user);
      navigation.replace("Main");
    } catch (error) {
      alert(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Log In"
        onPress={handleLogin}
        loading={loading}
        style={styles.button}
      />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("Signup")}
        style={styles.secondaryButton}
        textStyle={styles.secondaryButtonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 20,
  },
  secondaryButton: {
    marginTop: 10,
    backgroundColor: "transparent",
  },
  secondaryButtonText: {
    color: "#007AFF",
  },
});