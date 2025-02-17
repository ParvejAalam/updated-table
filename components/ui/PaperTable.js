import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { DataTable, Text } from "react-native-paper";

const { width } = Dimensions.get('window');

const TableComponent = () => {
  const rows = [
    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3", "Row 1 Col 4", "Row 1 Col 5"],
    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4", "Row 2 Col 5"],
    ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4", "Row 3 Col 5"],
    ["Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4", "Row 4 Col 5"],
    ["Row 5 Col 1", "Row 5 Col 2", "Row 5 Col 3", "Row 5 Col 4", "Row 5 Col 5"],
  ];

  return (
    <ScrollView horizontal style={styles.scrollView}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.tableCell}><Text>Column 1</Text></DataTable.Title>
          <DataTable.Title style={styles.tableCell}><Text>Column 2</Text></DataTable.Title>
          <DataTable.Title style={styles.tableCell}><Text>Column 3</Text></DataTable.Title>
          <DataTable.Title style={styles.tableCell}><Text>Column 4</Text></DataTable.Title>
          <DataTable.Title style={styles.tableCell}><Text>Column 5</Text></DataTable.Title>
        </DataTable.Header>

        {rows.map((row, rowIndex) => (
          <DataTable.Row key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <DataTable.Cell key={cellIndex} style={styles.tableCell}>
                <Text>{cell}</Text>
              </DataTable.Cell>
            ))}
          </DataTable.Row>
        ))}
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width,
  },
  tableCell: {
    minWidth: 100, // Adjust the width as needed
  },
});

export default TableComponent;
