import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Instant Booking",
    description: "Book reliable services nearby in just a few taps!",
  },
  {
    title: "Trusted Experts",
    description: "All professionals are verified and highly rated.",
  },
  {
    title: "Track Your Bookings",
    description: "Stay updated with job progress in real-time.",
  },
];

export default function OnboardingScreen({ navigation }) {
  const swiperRef = useRef(null);

  const handleNext = () => swiperRef.current.scrollBy(1);
  const handleBack = () => swiperRef.current.scrollBy(-1);

  return (
    <View style={styles.container}>
      {/* Slightly Lowered "Continue to App" */}
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.replace("RoleSelection")}
      >
        <Text style={styles.skipText}>Continue to App</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {slides.map((item, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imagePlaceholder}>
              <Text style={{ color: "#aaa" }}>Image {index + 1}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButtonLight} onPress={handleBack}>
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonLight} onPress={handleNext}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  skipButton: {
    alignSelf: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20, // lowered slightly
  },
  skipText: {
    color: "#007BFF",
    fontWeight: "600",
    fontSize: 14,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  imagePlaceholder: {
    width: width * 0.6,
    height: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingBottom: 30,
  },
  navButtonLight: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  navButtonText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
  dot: {
    backgroundColor: "#ccc",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#007BFF",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
});
