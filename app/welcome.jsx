import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backButton, isHovered && styles.backButtonHover]}
          onPress={() => navigation.navigate("index")}
          activeOpacity={0.6}
          onPressIn={() => setIsHovered(true)}
          onPressOut={() => setIsHovered(false)}
        >
          <Ionicons name="arrow-back" size={18} color="black" />
          <Text style={[styles.backText, isHovered && styles.backTextHover]}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan Card</Text>
      </View>

      {/* Scrollable ID Card Image with Shadow */}
      <ScrollView
        style={styles.imageScrollView}
        contentContainerStyle={styles.imageScrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.shadowContainer}>
          <Image source={require("../imgs/b.png")} style={styles.idCardImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    zIndex: 20,
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
  },
  imageScrollView: {
    flex: 1,
    width: "100%",
    maxHeight: 870, // Limits excessive scrolling
  },
  imageScrollContainer: {
    alignItems: "center",
    minHeight: 850, // Allows slight scrolling
  },
  shadowContainer: {
    alignSelf: "center", // Ensures it's centered properly
    shadowColor: "#000",
    shadowOpacity: 1.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5, // Ensures shadow appears on Android
    backgroundColor: "transparent", // Prevents white background covering the image
    overflow: "visible",
  },
  idCardImage: {
    width: 350, // Set a specific width
    height: 800, // Adjust height to maintain aspect ratio
    resizeMode: "contain",
  },
});

export default WelcomeScreen;
