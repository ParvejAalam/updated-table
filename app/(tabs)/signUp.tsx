import React from "react";
import MyButton from "@/components/ui/MyButton";
import { useRouter } from "expo-router";
import { ScrollView, Dimensions } from "react-native";
import TableApp from "../../components/ui/NewFileOfTbale";
import MobileUI from "../../components/ui/MobileUI";

export default function SignUp() {
  const router = useRouter();
  const handleSignUp = () => {};
  return (
    <ScrollView>
      <MyButton title="Sign Up" onPress={handleSignUp} />
      {/* <TableApp /> */}
      <MobileUI/>
    </ScrollView>
  );
}