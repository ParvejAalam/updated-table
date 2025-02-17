import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
// If you want icons, install and import e.g. react-native-vector-icons
// import Ionicons from "react-native-vector-icons/Ionicons";

const screenWidth = Dimensions.get("window").width;

// Example data for the 4 boxes
const holderData = [
  { name: "New Holders", count: "9,999,999,999", color: "#00AFEF" },
  { name: "Lost Holders", count: "9,999,999,999", color: "#FFB200" },
  { name: "Nil Holders", count: "9,999,999,999", color: "#F2478A" },
  { name: "Active Holders", count: "9,999,999,999", color: "#4BC0C0" },
];

const HolderBaseCard = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerTitle}>Holder Base</Text>
          {/* Example Info Icon (uncomment if using Ionicons):
            <Ionicons name="information-circle-outline" size={16} color="#fff" style={{ marginLeft: 5 }} />
          */}
        </View>

        {/* MoM with arrow */}
        <View style={styles.headerRight}>
          {/* Example Up Arrow (could also use Ionicons name="caret-up-outline" etc.) */}
          <Text style={styles.momText}>▲ 0.2% MoM</Text>
        </View>
      </View>

      {/* Subtitle for total */}
      <Text style={styles.subtitle}>Total (2,400,000,000)</Text>

      {/* Grid of 4 colored boxes */}
      <View style={styles.gridContainer}>
        {holderData.map((item, index) => (
          <View key={index} style={[styles.box, { backgroundColor: item.color }]}>
            {/* Example placeholder icon, or you can use Ionicons here */}
            {/* <Ionicons name="people-outline" size={24} color="#fff" style={{ marginBottom: 5 }} /> */}
            <Text style={styles.boxTitle}>{item.name}</Text>
            <Text style={styles.boxCount}>{item.count}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HolderBaseCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#111", // dark background for the card
    //borderRadius: 8,
   // padding: 16,
    width: screenWidth * 0.9, // or any width you prefer
    justifyContent:"space-between",
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
   // alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    // alignItems: "center",
  },
  momText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 14,
  },
  subtitle: {
    color: "#ccc",
    marginTop: 5,
    marginBottom: 15,
    fontSize: 14,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",      // allows wrapping to next row
    justifyContent: "space-between",
  },
  box: {
    width: "48%",          // two boxes per row
    borderRadius: 8,
   // padding: 10,
    marginBottom: 10,      // space below each row
  },
  boxTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  boxCount: {
    color: "#fff",
  },
});
