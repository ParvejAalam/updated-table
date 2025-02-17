import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TableComponent = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const tableHead = ["Share Class", "Register", "Balance", "Price", "Value"];
  const tableData = [
    ["BUYFIRST", "Plan Holding", "200000000", "USD 202.37", "USD 40,474.00"],
    ["Common Stock 1", "Plan Holding", "200000000", "USD 202.37", "USD 40,474.00"],
    ["Common Stock 2", "Certificate", "200000000", "USD 202.37", "USD 40,474.00"],
    ["DSPP-SP1 R/T And Batch W/Fees", "Plan Holding", "200000000", "USD 202.37", "USD 40,474.00"],
  ];

  const calculateTotalBalance = () => {
    return tableData.reduce((total, row) => {
      const balance = parseFloat(row[2].replace(/,/g, ''));
      return total + balance;
    }, 0).toLocaleString();
  };

  const totalRow = ["Total", "", calculateTotalBalance(), "C", "D"];

  const expandedData1 = ["Plan Holding", "200000000", "USD 202.37", "USD 40,474.00"];
  const expandedData2 = ["Plan Holding", "200000000", "USD 202.37", "USD 40,474.00"];

  const handleToggle = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableWrapper}>
        {/* Fixed First Column */}
        <View style={styles.fixedColumn}>
          <View style={styles.headerCell}>
            <Text style={styles.text}>{tableHead[0]}</Text>
          </View>
          {tableData.map((rowData, index) => (
            <View key={index} style={[styles.fixedCell, expandedRow === index && styles.expandedRowHeight]}>
              <Text style={styles.text}>{rowData[0]}</Text>
            </View>
          ))}
          {/* Total Row First Column */}
          <View style={styles.fixedCell}>
            <Text style={{color:"#fff", fontWeight:"bold"}}>{totalRow[0]}</Text>
          </View>
        </View>

        {/* Scrollable Columns */}
        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.scrollableTable}>
          <View>
            {/* Header Row */}
            <View style={styles.row}>
              {tableHead.slice(1).map((col, index) => (
                <View key={index} style={styles.headerCell}>
                  <Text style={styles.text}>{col}</Text>
                </View>
              ))}
            </View>

            {/* Data Rows */}
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={[styles.rowContainer, expandedRow === rowIndex && styles.expandedRowHeight]}>
                {/* Main Row */}
                <View style={styles.row}>
                  {row.slice(1).map((cell, colIndex) => (
                    <View
                      key={colIndex}
                      style={[
                        styles.cell,
                        colIndex === 1 && { borderLeftWidth: 0, borderRightWidth: 0 }, // No left and right border for B column
                      ]}
                    >
                      {rowIndex === 2 && colIndex === 0 ? (
                        <TouchableOpacity onPress={() => handleToggle(rowIndex)}>
                          <Text style={styles.arrowText}>{expandedRow === rowIndex ? "Certificate ⬆" : "Certificate ⬇"}</Text>
                        </TouchableOpacity>
                      ) : (
                        <Text style={styles.text}>{cell}</Text>
                      )}
                    </View>
                  ))}
                </View>

                {/* First Expanded Sub-Row */}
                {expandedRow === rowIndex && (
                  <>
                    <View style={styles.expandedRow}>
                      {expandedData1.map((item, index) => (
                        <View key={index} style={styles.cell}>
                          <Text style={styles.text}>{item}</Text>
                        </View>
                      ))}
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.expandedScrollView}>
                      <View style={styles.expandedRow}>
                        {expandedData1.map((item, index) => (
                          <View key={index} style={styles.cell}>
                            <Text style={styles.text}>{item}</Text>
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  </>
                )}

                {/* Second Expanded Sub-Row */}
                {expandedRow === rowIndex && (
                  <>
                    <View style={styles.expandedRow}>
                      {expandedData2.map((item, index) => (
                        <View key={index} style={styles.cell}>
                          <Text style={styles.text}>{item}</Text>
                        </View>
                      ))}
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.expandedScrollView}>
                      <View style={styles.expandedRow}>
                        {expandedData2.map((item, index) => (
                          <View key={index} style={styles.cell}>
                            <Text style={styles.text}>{item}</Text>
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  </>
                )}
              </View>
            ))}

            {/* Total Row */}
            <View style={styles.row}>
              {totalRow.slice(1).map((cell, index) => (
                <View
                  key={index}
                  style={[
                    styles.cell,
                    index === 1 && { borderLeftWidth: 0, borderRightWidth: 0 }, // No left and right border for B column
                  ]}
                >
                  <Text style={{color:"#fff", fontWeight:"bold"}}>{cell}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff", // Keeping container background white (or any other default)
  },
  tableWrapper: {
    flexDirection: "row",
    backgroundColor: "#000", // Black background only for table
    borderWidth: 1,
    borderColor: "#888", // Gray border
  },
  fixedColumn: {
    width: 151,
    backgroundColor: "#000", // Black background for fixed column
    borderRightWidth: 1,
    borderColor: "#888", // Gray border
  },
  scrollableTable: {
    flex: 1,
    backgroundColor: "#000", // Black background for scrollable area
  },
  headerCell: {
    height: 50,
    backgroundColor: "#000", // Black background for headers
    justifyContent: "center",
    //alignItems: "center",
    borderWidth: 1,
    borderColor: "#888", // Gray border
    width: 151,
  },
  rowContainer: {
    flexDirection: "column",
    backgroundColor: "#000", // Black background for all rows
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  fixedCell: {
    height: 50,
    backgroundColor: "#000", // Black background for fixed row
     justifyContent: "center",
    // alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#888", // Gray border
  },
  cell: {
    height: 50,
    width: 151,
     justifyContent: "center",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "#888", // Gray border
    backgroundColor: "#000", // Black background for cells
  },
  expandedRowHeight: {
    height: 150,
  },
  expandedRow: {
    flexDirection: "row",
    backgroundColor: "#000", // Black background for expanded rows
    borderBottomWidth: 1,
    borderColor: "#888", // Gray border
  },
  expandedScrollView: {
    maxHeight: 150, // Adjust the height as needed
  },
  text: {
   // textAlign: "center",
    fontSize: 16,
    color: "#fff", // White text only for table
  },
  arrowText: {
    fontSize: 16,
    color: "#FF999C", // White text only for table
   // fontWeight: "bold",
  },
});

export default TableComponent;
