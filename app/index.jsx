import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* Main Content Scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Card - Replace with Local Image */}
        <View style={styles.headerCard}>
          <Image source={require("../imgs/a.png")} style={styles.headerImage} />

          {/* Middle Button (Hidden But Clickable) */}
          <TouchableOpacity style={styles.middleButton} onPress={() => navigation.navigate("welcome")}>
            <Text style={styles.middleButtonText} color="AF5010">| | | | | | | | | |</Text>
          </TouchableOpacity>
        </View>

        {/* Accounts Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons name="cash" size={40} color="#666" />
            <Text style={styles.sectionTitle}>Accounts</Text>
          </View>

          <View style={styles.accountRow}>
            <View style={styles.accountBox}>
              <Text style={styles.accountLabel}>Meal Money</Text>
              <Text style={styles.accountAmount}>$0.00</Text>
            </View>
            <View style={styles.accountBox}>
              <Text style={styles.accountLabel}>Comet Cash</Text>
              <Text style={styles.accountAmount}>$0.00</Text>
            </View>
          </View>

          <View style={[styles.accountRow, { justifyContent: "flex-start" }]}>
            <View style={[styles.accountBox, styles.fullWidthAccountBox]}>
              <Text style={styles.accountLabel}>eSports</Text>
              <Text style={styles.accountAmount}>$0.00</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.addFundsButton}>
            <Text style={styles.addFundsText}>ADD FUNDS</Text>
          </TouchableOpacity>
        </View>

        {/* Transactions Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="sync-alt" size={18} color="black" />
            <Text style={styles.sectionTitle}>Transactions</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.allTransactionsText}>ALL TRANSACTIONS</Text>
          </TouchableOpacity>
        </View>

        {/* Order Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="shopping-bag" size={18} color="black" />
            <Text style={styles.sectionTitle}>Order</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.allTransactionsText}>START AN ORDER</Text>
          </TouchableOpacity>
        </View>

        {/* Explore Section */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="map" size={18} color="black" />
            <Text style={styles.sectionTitle}>Explore</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.allTransactionsText}>EXPLORE ALL</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Image source={require("../imgs/footer.png")} style={styles.navImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingBottom: 80, // Prevents content from overlapping with fixed bottom nav
  },
  headerCard: {
    width: "97%",
    height: 320,
    overflow: "hidden",
    borderRadius: 15,
    marginTop: 15,
    alignSelf: "center",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  middleButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: 100 }],
    backgroundColor: "rgba(0, 0, 0, 0)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    opacity: .02,
  },
  sectionCard: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  accountRow: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  accountBox: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "flex-start",
    width: "48%",
  },
  fullWidthAccountBox: {
    width: "48%",
  },
  accountLabel: {
    alignSelf: "left",
    fontSize: 14,
    color: "#666",
  },
  accountAmount: {
    alignSelf: "left",
    fontSize: 21,
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1,
    marginTop: 40,
  },
  addFundsButton: {
    margin: 10,
    alignSelf: "center",
  },
  addFundsText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  allTransactionsText: {
    color: "#007AFF",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  navImage: {
    width: "100%", // Stretch to full screen width
    height: 60,
    resizeMode: "stretch", // Ensures full-width display
  },
});

export default HomeScreen;