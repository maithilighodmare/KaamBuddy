import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // ✅ Import navigation hook

const bookings = [
  {
    id: "1",
    service: "Plumbing Repair",
    provider: "John Doe",
    date: "Mon, Oct 26, 2023 • 10:00 AM",
    address: "123 Main St, Cityville",
    icon: "construct-outline",
    status: "CONFIRMED",
  },
  {
    id: "2",
    service: "Makeup Session",
    provider: "Jane Smith",
    date: "Tue, Oct 27, 2023 • 02:00 PM",
    address: "456 Oak Ave, Townsville",
    icon: "brush-outline",
    status: "CONFIRMED",
  },
  {
    id: "3",
    service: "Electrical Wiring",
    provider: "Mike Johnson",
    date: "Wed, Oct 28, 2023 • 09:00 AM",
    address: "789 Pine Ln, Villageton",
    icon: "bulb-outline",
    status: "IN PROGRESS",
  },
  {
    id: "4",
    service: "House Painting",
    provider: "Sarah Davis",
    date: "Thu, Oct 22, 2023 • 01:00 PM",
    address: "101 Elm Rd, Hamlet",
    icon: "color-palette-outline",
    status: "COMPLETED",
  },
  {
    id: "5",
    service: "Car Detailing",
    provider: "Auto Spa",
    date: "Fri, Oct 23, 2023 • 11:00 AM",
    address: "202 Garage St, Metropolis",
    icon: "car-outline",
    status: "CANCELLED",
  },
];

export default function BookingScreen() {
  const navigation = useNavigation(); // ✅ Hook
  const [selectedTab, setSelectedTab] = useState("Upcoming");

  const filterBookings = (tab) => {
    switch (tab) {
      case "Upcoming":
        return bookings.filter((b) => b.status === "CONFIRMED");
      case "Ongoing":
        return bookings.filter((b) => b.status === "IN PROGRESS");
      case "Completed":
        return bookings.filter((b) => b.status === "COMPLETED");
      default:
        return bookings;
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "CONFIRMED":
        return { backgroundColor: "#28a745" };
      case "IN PROGRESS":
        return { backgroundColor: "#fd7e14" };
      case "COMPLETED":
        return { backgroundColor: "#007bff" };
      case "CANCELLED":
        return { backgroundColor: "#dc3545" };
      default:
        return { backgroundColor: "#6c757d" };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <TouchableOpacity>
          <Icon name="filter-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {["Upcoming", "Ongoing", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setSelectedTab(tab)}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Booking Cards */}
      <ScrollView style={{ marginTop: 10 }}>
        {filterBookings(selectedTab).map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("BookingDetails", { booking: item })
            } // ✅ Navigate with data
          >
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.iconCircle}>
                  <Icon name={item.icon} size={20} color="#fff" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.service}>{item.service}</Text>
                  <Text style={styles.provider}>by {item.provider}</Text>
                </View>
                <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
              <View style={styles.cardDetails}>
                <Icon name="calendar-outline" size={14} color="#555" />
                <Text style={styles.cardText}>{item.date}</Text>
              </View>
              <View style={styles.cardDetails}>
                <Icon name="location-outline" size={14} color="#555" />
                <Text style={styles.cardText}>{item.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabButton: {
    paddingBottom: 10,
    flex: 1,
    alignItems: "center",
  },
  tabText: {
    color: "#777",
    fontWeight: "600",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1e90ff",
  },
  activeTabText: {
    color: "#1e90ff",
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  service: {
    fontSize: 16,
    fontWeight: "bold",
  },
  provider: {
    color: "#777",
    fontSize: 13,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 11,
  },
  cardDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  cardText: {
    marginLeft: 8,
    color: "#333",
    fontSize: 13,
  },
});
