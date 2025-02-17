import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const CHART_SIZE = 190; // Outer diameter of the PieChart
const HOLE_SIZE = 90; // Inner white circle diameter

const CenteredDonutChart = () => {
  const data = [
    { name: "Outstanding", population: 210508849, color: "#FFBB28" },
    { name: "Treasury", population: 210508849, color: "#FF6384" },
    { name: "Reserves", population: 210508849, color: "#36A2EB" },
    { name: "Unallocated", population: 210508849, color: "#4BC0C0" },
  ];

  return (
    <View style={styles.container}>
      {/* Optional heading text */}

      {/* Donut Chart Wrapper (same size as the chart) */}
      <View
        style={[styles.chartWrapper, { width: CHART_SIZE, height: CHART_SIZE }]}
      >
        <PieChart
          data={data}
          width={CHART_SIZE}
          height={CHART_SIZE}
          chartConfig={{
            backgroundColor: "#000",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          hasLegend={false}
          center={[CHART_SIZE / 4, CHART_SIZE / 15]} // We'll create our own legend
          // Remove any default left padding
        />

        {/* White hole for donut effect */}
        <View style={styles.centerHole} />
      </View>

      {/* Legend below */}
      <View style={styles.legendRowContainer}>
        {/* First Column: first 2 items */}
        <View style={styles.legendColumnContainer}>
          {data.slice(0, 2).map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <View style={styles.legendTextContainer}>
                <Text style={styles.legendText}>{item.name}</Text>
                <Text style={styles.legendPopulation}>{item.population}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Second Column: last 2 items */}
        <View style={styles.legendColumnContainer}>
          {data.slice(2).map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <View style={styles.legendTextContainer}>
                <Text style={styles.legendText}>{item.name}</Text>
                <Text style={styles.legendPopulation}>{item.population}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CenteredDonutChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E", // Black background for clarity
    // alignItems: "center", // Center horizontally
    // justifyContent: "center", // Center vertically
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#aaa",
    marginTop: 5,
  },
  headerMoM: {
    color: "#fff",
    marginTop: 5,
  },

  chartWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginBottom: 0,
  },
  centerHole: {
    position: "absolute",
    width: HOLE_SIZE,
    height: HOLE_SIZE,
    borderRadius: HOLE_SIZE / 2,
    backgroundColor: "#1E1E1E", // White hole
    top: "57%",
    left: "50%",
    transform: [
      { translateX: -(HOLE_SIZE / 2) },
      { translateY: -(HOLE_SIZE / 2) },
    ],
  },

  legendRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // spread the two columns apart
    marginHorizontal: 20, // adjust horizontal margin as needed
    marginTop: 10,
    marginLeft: 7,
  },
  legendColumnContainer: {
    flexDirection: "column",
    alignItems: "flex-start", // align items to the start (left)
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "flex-start", // align dot and text at the top
    marginBottom: 10, // space between items
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 3,
    marginRight: 8,
    marginTop: 3, // add margin to adjust vertical alignment with text if needed
  },
  legendTextContainer: {
    flexDirection: "column", // stacks text vertically
  },
  legendText: {
    fontSize: 14,
    color: "#fff",
  },
  legendPopulation: {
    fontSize: 14,
    color: "#fff",
    fontWeight:"600"
  },
});
