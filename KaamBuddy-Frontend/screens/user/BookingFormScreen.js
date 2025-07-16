import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BookingFormScreen({ route, navigation }) {
  const [selectedService, setSelectedService] = useState("Full Face Makeup");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const price = 80;
  const serviceFee = 5;

  const timeSlots = [
    "9:00 AM",
    "10:30 AM",
    "12:00 PM",
    "2:00 PM",
    "3:30 PM",
    "5:00 PM",
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Riya Sharma</Text>

      {/* Service Dropdown */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Service</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Icon name="cut-outline" size={16} color="#666" />
          <Text style={styles.dropdownText}>{selectedService}</Text>
        </TouchableOpacity>
      </View>

      {/* Date Input */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Date</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Icon name="calendar-outline" size={16} color="#666" />
          <Text style={styles.dropdownText}>dd-mm-yyyy</Text>
        </TouchableOpacity>
      </View>

      {/* Time Slot Picker */}
      <View style={styles.section}>
        <Text style={styles.label}>Select Time Slot</Text>
        <View style={styles.timeRow}>
          {timeSlots.map((slot) => (
            <TouchableOpacity
              key={slot}
              onPress={() => setSelectedTime(slot)}
              style={[
                styles.timeSlot,
                selectedTime === slot && styles.activeTime,
              ]}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === slot && { color: "#fff" },
                ]}
              >
                {slot}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Address */}
      <View style={styles.section}>
        <Text style={styles.label}>Enter Address</Text>
        <View style={styles.inputContainer}>
          <Icon name="location-outline" size={16} color="#666" />
          <TextInput
            placeholder="e.g., 123 Main St, Apt 4B"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>
        <TouchableOpacity style={styles.currentLocation}>
          <Text style={styles.locationText}>Use Current Location</Text>
        </TouchableOpacity>
      </View>

      {/* Instructions */}
      <View style={styles.section}>
        <Text style={styles.label}>Special Instructions (Optional)</Text>
        <View style={styles.inputContainer}>
          <Icon name="document-text-outline" size={16} color="#666" />
          <TextInput
            placeholder="e.g., 'Please bring extra foundation...'"
            style={styles.input}
            value={instructions}
            onChangeText={setInstructions}
          />
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.label}>Payment Method</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Icon name="card-outline" size={16} color="#666" />
          <Text style={styles.dropdownText}>{paymentMethod}</Text>
        </TouchableOpacity>
      </View>

      {/* Price Summary */}
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Full Face Makeup <Text style={styles.price}>${price.toFixed(2)}</Text>
        </Text>
        <Text style={styles.summaryText}>
          Service Fee <Text style={styles.price}>${serviceFee.toFixed(2)}</Text>
        </Text>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>
            ${(price + serviceFee).toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => alert("Booking Confirmed!")}
      >
        <Text style={styles.confirmText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "500",
    marginBottom: 6,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
  },
  dropdownText: {
    marginLeft: 10,
    color: "#555",
  },
  timeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  timeSlot: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 4,
  },
  activeTime: {
    backgroundColor: "#007BFF",
  },
  timeText: {
    color: "#333",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  input: {
    marginLeft: 8,
    flex: 1,
    color: "#333",
  },
  currentLocation: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  locationText: {
    color: "#007BFF",
    fontSize: 13,
  },
  summary: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 14,
    marginBottom: 6,
  },
  price: {
    fontWeight: "600",
    float: "right",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 16,
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#007BFF",
  },
  confirmButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
