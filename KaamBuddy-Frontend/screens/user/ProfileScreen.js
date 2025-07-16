import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ProfileScreen({ navigation }) {
  const user = {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    history: [
      {
        id: 1,
        service: "Plumbing Repair",
        provider: "John Smith",
        date: "Oct 26, 2023 • 10:00 AM",
        status: "Completed",
      },
      {
        id: 2,
        service: "Electrical Wiring",
        provider: "Jane Doe",
        date: "Oct 27, 2023 • 02:30 PM",
        status: "Completed",
      },
      {
        id: 3,
        service: "AC Maintenance",
        provider: "Mike Johnson",
        date: "Oct 15, 2023 • 09:00 AM",
        status: "Completed",
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.profileSection}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
      </View>

      {/* Menu Options */}
      <View style={styles.card}>
        <MenuItem icon="create-outline" label="Edit Profile" />
        <MenuItem icon="location-outline" label="Saved Addresses" />
        <MenuItem icon="card-outline" label="Payments" />
        <MenuItem icon="help-circle-outline" label="Support" />
        <MenuItem icon="language-outline" label="Language" />
        <MenuItem icon="log-out-outline" label="Logout" color="#dc3545" />
      </View>

      {/* Service History */}
      <Text style={styles.historyTitle}>Service History</Text>
      <View style={styles.card}>
        {user.history.map((item) => (
          <View key={item.id} style={styles.historyItem}>
            <View>
              <Text style={styles.serviceName}>{item.service}</Text>
              <Text style={styles.subInfo}>by {item.provider}</Text>
              <Text style={styles.subInfo}>{item.date}</Text>
              <Text style={[styles.statusText, { color: "#28a745" }]}>
                {item.status}
              </Text>
            </View>
            <TouchableOpacity style={styles.rateButton}>
              <Text style={styles.rateText}>Rate Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const MenuItem = ({ icon, label, color = "#333" }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={20} color={color} style={{ width: 25 }} />
    <Text style={[styles.menuText, { color }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 15,
    marginLeft: 10,
  },
  historyTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
  },
  historyItem: {
    paddingVertical: 12,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  serviceName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subInfo: {
    fontSize: 13,
    color: "#666",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 2,
  },
  rateButton: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "center",
  },
  rateText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
});
