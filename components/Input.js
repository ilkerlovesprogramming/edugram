import React from 'react';
import { TextInput, StyleSheet, Animated, View, Text } from 'react-native';
import colors from '../theme/colors';

export default function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  error,
  style,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (focused) {
      Animated.spring(scaleAnim, {
        toValue: 1.02,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  }, [focused]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.inputContainer,
          focused && styles.focused,
          error && styles.error,
          { transform: [{ scale: scaleAnim }] },
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholderTextColor={colors.placeholder}
          style={[styles.input, style]}
          {...props}
        />
      </Animated.View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.background,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
  },
  focused: {
    borderColor: colors.primary,
    shadowOpacity: 0.2,
  },
  error: {
    borderColor: colors.error,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});