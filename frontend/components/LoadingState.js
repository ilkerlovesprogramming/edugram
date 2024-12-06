import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const LoadingState = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0066cc" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

export default LoadingState;