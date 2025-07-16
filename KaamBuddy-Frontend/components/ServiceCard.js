import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ServiceCard = ({ provider }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{ uri: provider.image || "https://via.placeholder.com/60" }}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={styles.name}>{provider.name}</Text>
          <Text style={styles.service}>{provider.serviceType}</Text>
          <Text style={styles.location}>📍 {provider.location}</Text>
        </View>
        <Text style={styles.rating}>⭐ {provider.rating}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>₹{provider.hourlyRate}/hr</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  service: {
    color: "#666",
    fontSize: 13,
  },
  location: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 16,
    color: "#1e90ff",
    fontWeight: "600",
  },
  bookButton: {
    backgroundColor: "#1dd1a1",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default ServiceCard;
