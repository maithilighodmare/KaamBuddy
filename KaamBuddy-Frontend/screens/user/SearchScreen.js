import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { searchRecent, searchResults } from "../../data/dummyData";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Search</Text>

      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Icon name="search-outline" size={20} color="#888" />
        <TextInput
          placeholder="Search for services (e.g., electrician, repair)"
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      {/* Recent Searches */}
      <Text style={styles.subheading}>Recent Searches</Text>
      <View style={styles.tagContainer}>
        {searchRecent.map((label, index) => (
          <TouchableOpacity key={index} style={styles.tag}>
            <Icon name="search-outline" size={14} color="#1E90FF" />
            <Text style={styles.tagText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Popular Near You */}
      <Text style={styles.subheading}>Popular Near You</Text>
      <View style={styles.cardWrapper}>
        {searchResults.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <Icon name={service.icon} size={28} color="#fff" />
            </View>
            <Text style={styles.serviceName}>{service.name}</Text>
            <View style={styles.ratingRow}>
              <Icon name="star" size={14} color="orange" />
              <Text style={styles.ratingText}>{service.rating}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  subheading: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
    color: "#000",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6F0FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    marginLeft: 6,
    color: "#1E90FF",
    fontSize: 13,
    fontWeight: "500",
  },
  cardWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    width: "47%",
    marginBottom: 15,
    alignItems: "center",
  },
  iconCircle: {
    backgroundColor: "#1E90FF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 13,
    color: "#333",
  },
});
