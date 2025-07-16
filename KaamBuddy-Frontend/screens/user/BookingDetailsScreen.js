import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BookingDetailsScreen({ route, navigation }) {
  
  const booking = {
    service: "Makeup Session",
    provider: "Jane Smith",
    date: "Tue, Oct 27, 2023",
    time: "02:00 PM",
    address: "456 Oak Ave, Townsville",
    price: "$50.00",
    description:
      "Professional makeup session for special occasions including full face makeup, eyelashes, and contouring. Using high-quality, long-lasting products.",
    contact: {
      phone: "+1 (305) 123-4567",
      email: "jane.smith@example.com",
    },
    status: "CONFIRMED",
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          {/* Service Title & Status */}
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.serviceTitle}>{booking.service}</Text>
              <Text style={styles.provider}>by {booking.provider}</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{booking.status}</Text>
            </View>
          </View>

          {/* Date, Time, Address */}
          <View style={styles.row}>
            <Icon
              name="calendar-outline"
              size={18}
              color="#555"
              style={styles.icon}
            />
            <Text style={styles.detailText}>
              {booking.date} • {booking.time}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="location-outline"
              size={18}
              color="#555"
              style={styles.icon}
            />
            <Text style={styles.detailText}>{booking.address}</Text>
          </View>
          <View style={styles.row}>
            <Icon
              name="pricetag-outline"
              size={18}
              color="#555"
              style={styles.icon}
            />
            <Text style={styles.detailText}>Price: {booking.price}</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Service Description</Text>
          <Text style={styles.paragraph}>{booking.description}</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Provider Contact</Text>
          <Text style={styles.detailText}>📞 {booking.contact.phone}</Text>
          <Text style={styles.detailText}>✉️ {booking.contact.email}</Text>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.messageBtn}>
          <Text style={styles.btnText}>Message Provider</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.btnText}>Cancel Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  provider: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  detailText: {
    fontSize: 15,
    color: "#444",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  statusBadge: {
    backgroundColor: "#28a745",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  messageBtn: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelBtn: {
    backgroundColor: "#ff3b30",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
