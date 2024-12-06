import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

// Function to generate random color
const randomColor = () => {
  const colors = ['#493D51', '#7719B2', '#A30CF2', '#FF6347', '#3CB371', '#4682B4'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Array of text
const textArray = [
  "Welcome to EduGram - The Best Learning Community!",
  "Explore new learning opportunities with EduGram.",
  "Collaborate and grow with passionate learners.",
  "Enhance your skills and unlock your potential!"
];

export default function SignupSuccess({ navigation }) {
  const scaleAnim = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    // Automatically navigate to login after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('LogIn');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  const [dotColor, setDotColor] = useState(randomColor());
  const [intervalRunning, setIntervalRunning] = useState(true);
  const [clickTimeout, setClickTimeout] = useState(null);
  const [currentText, setCurrentText] = useState(textArray[0]); // Default to first text

  useEffect(() => {
    if (intervalRunning) {
      const interval = setInterval(() => {
        setDotColor(randomColor());
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [intervalRunning]);

  const handleDotClick = () => {
    setIntervalRunning(false);

    if (clickTimeout) clearTimeout(clickTimeout);
    const timeout = setTimeout(() => {
      setIntervalRunning(true);
    }, 10000);

    setClickTimeout(timeout);

    const nextTextIndex = (textArray.indexOf(currentText) + 1) % textArray.length;
    setCurrentText(textArray[nextTextIndex]);
  };

  const onSwipeGesture = (event) => {
    const translationX = event.nativeEvent.translationX;

    if (translationX > 50) {
      const nextTextIndex = (textArray.indexOf(currentText) + 1) % textArray.length;
      setCurrentText(textArray[nextTextIndex]);
    } else if (translationX < -50) {
      const prevTextIndex = (textArray.indexOf(currentText) - 1 + textArray.length) % textArray.length;
      setCurrentText(textArray[prevTextIndex]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.column}>
            <View style={styles.view}>
              <Text style={styles.text}>{"EduGram"}</Text>
            </View>

            <PanGestureHandler onGestureEvent={onSwipeGesture}>
              <View style={styles.textWrapper}>
                <Text style={styles.textContent}>{currentText}</Text>
              </View>
            </PanGestureHandler>

            <Text style={styles.text2}>
              {"Congrats! You've joined the best community of learners in the world."}
            </Text>

            <View style={styles.row}>
              <TouchableOpacity style={[styles.box, { backgroundColor: dotColor }]} onPress={handleDotClick}></TouchableOpacity>
              <TouchableOpacity style={[styles.box, { backgroundColor: randomColor() }]} onPress={handleDotClick}></TouchableOpacity>
              <TouchableOpacity style={[styles.box, { backgroundColor: randomColor() }]} onPress={handleDotClick}></TouchableOpacity>
              <TouchableOpacity style={[styles.box2, { backgroundColor: randomColor() }]} onPress={handleDotClick}></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => alert('Pressed!')}>
              <Text style={styles.text3}>{"Continue"}</Text>
            </TouchableOpacity>

            <View style={styles.box3}></View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};