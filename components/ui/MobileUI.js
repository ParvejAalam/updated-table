import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import Collapsible from "react-native-collapsible";

const { width } = Dimensions.get("window");

const CollapsibleTable = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const scrollViewRefs = useRef([]);
  const detailScrollRefs = useRef(new Set());

  const toggleExpand = (id) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    scrollViewRefs.current.forEach((scrollView) => {
      if (scrollView) {
        scrollView.scrollTo({ x: scrollX, animated: false });
      }
    });
  };

  const handleDetailScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    detailScrollRefs.current.forEach((scrollView) => {
      if (scrollView) {
        scrollView.scrollTo({ x: scrollX, animated: false });
      }
    });
  };

  const renderItem = ({ item, index }) => (
    <>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() =>
            typeof item.details === "string" && toggleExpand(item.id)
          }
          style={styles.frozenColumn}
        >
          <Text style={styles.text}>
            {item.name}
            {typeof item.details === "string" &&
              (expandedRows[item.id] ? " ↓" : " ↑")}
          </Text>
        </TouchableOpacity>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollableRow}
          ref={(el) => (scrollViewRefs.current[index] = el)}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.otherColumns}>
            {item.otherColumns.map((col, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                onPress={() =>
                  Array.isArray(item.details) && toggleExpand(item.id)
                }
              >
                <Text style={styles.text}>
                  {col}
                  {Array.isArray(item.details) && expandedRows[item.id]
                    ? " ↓"
                    : " ↑"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Collapsible collapsed={!expandedRows[item.id]}>
        {Array.isArray(item.details) &&
          item.details.map((detail, detailIndex) => (
            <View key={detailIndex} style={styles.row}>
              <View style={styles.frozenColumnPlaceholder} />

              <ScrollView
                horizontal
                style={styles.scrollableRow}
                showsHorizontalScrollIndicator={false}
                ref={(el) => {
                  if (el) detailScrollRefs.current.add(el);
                }}
                onScroll={handleDetailScroll}
                scrollEventThrottle={16}
              >
                <View style={styles.otherColumns}>
                  {item.otherColumns.map((_, colIndex) => (
                    <Text key={colIndex} style={styles.text}>
                      {colIndex === 0 ? detail.value : "-"}
                    </Text>
                  ))}
                </View>
              </ScrollView>
            </View>
          ))}
      </Collapsible>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: Platform.OS === "web" ? "white" : "black",
  },
  row: { flexDirection: "row", alignItems: "center", height: 50 },
  frozenColumn: {
    width: width < 600 ? width * 0.35 : 155,
    backgroundColor: "white",
    justifyContent: "center",
  },
  frozenColumnPlaceholder: { width: width < 600 ? width * 0.35 : 155 },
  scrollableRow: { flex: 1 },
  otherColumns: { flexDirection: "row" },
  text: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#555",
    minWidth: 155,
    textAlign: "center",
  },
});

export default CollapsibleTable;
