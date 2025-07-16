import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfilrScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KaamBuddy</Text>
      <Text>ps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
