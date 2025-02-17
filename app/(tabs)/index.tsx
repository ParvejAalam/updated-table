import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import MyButton from "@/components/ui/MyButton";
import MyTextInput from "@/components/ui/MyTextInput";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const handleOnchange = (name, e) => {
    setInputValue((prev) => ({
      ...prev,
      [name]: e,
    }));
  };
  const handleSign = () => {
    console.log(inputValue);
    router.navigate("/login");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Image
            source={require("@/assets/images/register.jpg")}
            className="w-full h-96 object-contain"
            resizeMode="contain"
            style={{
              width: "100%",
              height: 300,
            }}
          />
        </View>

        <MyTextInput
          value={inputValue.name}
          onChangeText={(e) => handleOnchange("name", e)}
          placeholder="Enter Your First Name"
        />
        <TextInput
          value={inputValue.password}
          onChangeText={(e) => handleOnchange("password", e)}
          placeholder="Enter Your Password"
          style={styles.textInput}
        />
        <TextInput
          value={inputValue.email}
          onChangeText={(e) => handleOnchange("email", e)}
          placeholder="Enter Your Email"
          style={styles.textInput}
        />
        <TextInput
          className="p-5 bg-costumeGreen lg:w-[50%]"
          value={inputValue.confirmPassword}
          onChangeText={(e) => handleOnchange("confirmPassword", e)}
          placeholder="Re-Enter Your Password"
          style={styles.textInput}
        />
        <MyButton title="Register" onPress={handleSign} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  textInput: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#d1d5db", // bg-gray-300
    borderRadius: 12,
    marginVertical: 8,
  },
});
