import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BookingScrren() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KaamBuddy</Text>
      <Text>bs</Text>
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
