import React, { useEffect } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007BFF" />
      <Text style={styles.title}>KaamBuddy</Text>
      <Text style={styles.subtitle}>Connecting you to nearby experts...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    position: "absolute",
    bottom: 40,
    fontSize: 16,
    color: "#fff",
  },
});
