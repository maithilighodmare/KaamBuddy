import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to KaamBuddy</Text>
      <Text style={styles.subtitle}>Choose your role to continue</Text>

      <TouchableOpacity
        style={styles.buttonUser}
        onPress={() => navigation.navigate("UserTabs")}
      >
        <Text style={styles.buttonText}>Continue as User</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonProvider}
        onPress={() => navigation.navigate("ProviderTabs")}
      >
        <Text style={styles.buttonText}>Continue as Provider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  buttonUser: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonProvider: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
