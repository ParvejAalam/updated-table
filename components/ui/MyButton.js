import { View, Text, TouchableOpacity } from "react-native";
import React from "react";


export default function MyButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-yellow-200 p-2 flex justify-center items-center"
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
