import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  // Sample data array (label, value, percentage, color)
  const data = [
    {
      label: "Cede & Co.",
      value: 2817087000,
      percentage: 40.89,
      color: "#22a6b3",
    },
    {
      label: "Thomas & Mc Smith",
      value: 916100000,
      percentage: 14.98,
      color: "#f9ca24",
    },
    {
      label: "Janet E Rust",
      value: 336000000,
      percentage: 5.15,
      color: "#eb4d4b",
    },
    {
      label: "Michael Power",
      value: 33400000,
      percentage: 4.15,
      color: "#eb4d4b",
    },
    {
      label: "Martin R Volk TR.",
      value: 336000000,
      percentage: 0.8,
      color: "#fff",
    },
  ];

  // ProgressBar sub-component
  const ProgressBar = ({ label, value, percentage, color }) => {
    return (
      <View style={styles.progressContainer}>
        {/* Label & Value */}
        <View style={styles.labelRow}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value.toLocaleString()}</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.row}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${percentage}%`, backgroundColor: color },
              ]}
            />
          </View>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header at the top */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Holders</Text>
      </View>

      {/* Render progress bars for each item */}
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          value={item.value}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    marginTop: 5,
    padding: 18,
    // Remove or adjust justifyContent so content is at the top
    // justifyContent: "center",
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  progressContainer: {
    marginBottom: 16,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  value: {
    fontSize: 16,
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center", // vertically align items
  },
  progressBar: {
    flex: 1, // take up remaining width
    height: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 8, // spacing between bar and text
  },
  progressFill: {
    height: "100%",
    borderRadius: 5,
  },
  percentage: {
    fontSize: 14,
    color: "#fff",
  },
});

export default App;
