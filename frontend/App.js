import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreLogs(['Warning: ...']); // Ignore specific warnings if needed

export default function App() {
  return (
    <AuthProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <StatusBar style="auto" />
        <AppNavigator />
      </KeyboardAvoidingView>
    </AuthProvider>
  );
}