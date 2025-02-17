import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { LineChart, PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { VictoryLine, VictoryChart, VictoryArea } from "victory-native";
import ChartComponent from "./DonutChart";
import HolderUi from "./HolderUI";
import ProgressBar from "./ProgressbarUI";

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Home");
  const [selected, setSelected] = useState("5D");

  const timeFrames = ["5D", "1M", "6M", "YTD"];
  const TwoDivsInRow = () => {
    return (
      <View>
        <View style={styles.holdercontainer}>
          <View style={styles.box}>
            <View style={styles.insideContainer}>
              <View style={[styles.imageBox, { backgroundColor: "#4BC0C0" }]}>
                3
              </View>
              <View style={styles.firstView}>
                <Text style={styles.legendText}> New Holders</Text>
                <Text style={styles.legendPopulation}>9,999,999,999</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.insideContainer}>
              <View style={[styles.imageBox, { backgroundColor: "#FFBB28" }]}>
                3
              </View>
              <View style={styles.firstView}>
                <Text style={styles.legendText}> Lost Holders</Text>
                <Text style={styles.legendPopulation}>9,999,999,999</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.holdercontainer}>
          <View style={styles.box}>
            <View style={styles.insideContainer}>
              <View style={[styles.imageBox, { backgroundColor: "#36A2EB" }]}>
                3
              </View>
              <View style={styles.firstView}>
                <Text style={styles.legendText}> Nil Holders</Text>
                <Text style={styles.legendPopulation}>9,999,999,999</Text>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.insideContainer}>
              <View style={[styles.imageBox, { backgroundColor: "#FF6384" }]}>
                3
              </View>
              <View style={styles.firstView}>
                <Text style={styles.legendText}> Active Holders</Text>
                <Text style={styles.legendPopulation}>9,999,999,999</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Dropdown */}
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => setSelectedOption(itemValue)}
            style={styles.picker}
            dropdownIconColor="white"
            mode="dropdown"
            
          >
            <Picker.Item
              label="Shipline Corporation"
              value="Shipline Corporation"
              color="#1E1E1E"
            />
            <Picker.Item label="Home" value="Home" color="#1E1E1E" />
            <Picker.Item label="About" value="About" color="#1E1E1E" />
            <Picker.Item label="Detail" value="Detail" color="#1E1E1E" />
          </Picker>
        </View>

        {/* Notification Icon */}
        <View style={styles.notificationWrapper}>
          <MaterialIcons name="notifications" size={24} color="white" />

          {/* Red Badge */}
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>12</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <MaterialIcons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBox}
          placeholder="Search Holder"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.rowContainer}>
          {/* Left Side - Text Section */}
          <View style={styles.textContainer}>
            <Text style={styles.chartTitle}>SHL</Text>
            <Text style={styles.price}>60.98</Text>
            <Text style={styles.percentage}>0.2% MoM</Text>
          </View>

          {/* Right Side - Chart Section */}
          <Text>Right Chart</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <View style={styles.textcontainer}>
          {/* First View (white background) */}
          <View style={styles.firstView}>
            <Text style={styles.price}>Issued Shares</Text>
            <Text style={styles.total}>Total (2,400,000,000)</Text>
          </View>

          {/* Second View (green background) */}
          <View style={styles.secondView}>
            <Text style={styles.percentage}>0.2% MoM</Text>
          </View>
        </View>

        <ChartComponent />
      </View>
      <View style={styles.chartContainer}>
        <View style={styles.textcontainer}>
          {/* First View (white background) */}
          <View style={styles.firstViewHolder}>
            <Text style={styles.price}>Holder Base</Text>
            <Text style={styles.total}>Total (2,400,000,000)</Text>
          </View>

          {/* Second View (green background) */}
          <View style={styles.secondView}>
            <Text style={styles.percentageHolder}>0.2% MoM</Text>
          </View>
        </View>

        {TwoDivsInRow()}
      </View>
      <ProgressBar />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212", padding: 20 },
  title: { color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  searchBox: {
    backgroundColor: "#1E1E1E",
    color: "white",
    padding: 10,
    borderRadius: 50,
    marginBottom: 20,
  },
  chartContainer: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  chartTitle: { color: "white", fontSize: 16, fontWeight: "bold" },
  price: { color: "white", fontSize: 24, fontWeight: "bold" },
  percentage: { color: "green", fontSize: 14, fontWeight: "600", marginTop: 8 },
  searchIcon: {
    marginRight: 10,
  },
  searchBox: {
    flex: 1,
    color: "white",
    paddingVertical: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 50,
    paddingHorizontal: 10,
    marginBottom: 20,

    // White Shadow (only below)
    shadowColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
    shadowOffset: { width: 0, height: 6 }, // Moves shadow downward
    shadowOpacity: 1, // Stronger visibility
    shadowRadius: 8, // Thicker effect
    elevation: 10, // For Android
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  dropdownContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginRight: 20, // Ensures a gap between dropdown and icon
  },

  picker: {
    color: "white",
    backgroundColor: "transparent",
    height: 55,
  },

  notificationWrapper: {
    position: "relative",
  },

  notificationBadge: {
    position: "absolute",
    right: -5,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: { color: "white", fontSize: 10, fontWeight: "bold" },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures space between text and chart
    marginLeft:7
  },
  linecontainer: {
    alignItems: "center",
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
  },
  timeFrameContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  timeFrameText: {
    color: "#aaa",
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectedText: {
    color: "#ff00ff",
    fontWeight: "bold",
  },
  textcontainer: {
    flex: 1,
    //padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstView: {
    //backgroundColor: "white",
    //padding: 10,
    // marginBottom: 5,
    marginLeft: 12,
    // marginRight: 20,
  },
  firstViewHolder: {
    marginBottom: 15,
    marginLeft: 12,
  },
  secondView: {
    // backgroundColor: "green",
    //padding: 10,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  moMText: {
    fontSize: 16,
    color: "green",
  },
  total: {
    color: "white",
  },
  holdercontainer: {
    flexDirection: "row",
    justifyContent: "space-between", // distributes extra space between boxes
    padding: 11,
    // backgroundColor: "#000", // for visual contrast
  },
  holdercontainer2: {},
  // Each box is ~45% of the container's width.
  // The remaining ~10% is the gap between them.
  box: {
    width: "45%",
    // backgroundColor: "#ddd",
    //padding: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  boxText: {
    textAlign: "center",
    fontSize: 16,
  },

  insideContainer: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: 'space-between', // distributes extra space between boxes
    padding: 0,
    margin: 0,
    //backgroundColor: '#000',
  },

  imageBox: {
    width: 40,
    height: 40,
    justifyContent: "center", // centers content vertically
    alignItems: "center", // centers content horizontally
    backgroundColor: "#FFBB28",
    borderRadius: 4,
  },
  legendText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: -4,
  },
  legendPopulation: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
  percentageHolder: {
    color: "red",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
  },
});
