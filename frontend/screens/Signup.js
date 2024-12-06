import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { signup } from "../api/auth";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      await signup(username, email, password);
      navigation.navigate("SignupSuccess");
    } catch (error) {
      alert(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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
        title="Sign Up"
        onPress={handleSignup}
        loading={loading}
        style={styles.button}
      />
      <Button
        title="Back to Login"
        onPress={() => navigation.goBack()}
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