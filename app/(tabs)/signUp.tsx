import React from "react";
import MyButton from "@/components/ui/MyButton";
import { useRouter } from "expo-router";
import { ScrollView, Dimensions } from "react-native";
import CollapsibleTable from "../../components/ui/NewFileOfTbale";
import MobileUI from "../../components/ui/MobileUI";

export default function SignUp() {
  // const DATA = [
  //   {
  //     id: "1",
  //     name: "Share Class",
  //    // details:"rrr",
  //     details: [
  //       { key: "Detail 1", value: "D1" },
  //       { key: "Detail 2", value: "D2" },
  //       { key: "Detail 3", value: "D3" },
  //       { key: "Detail 4", value: "D4" },
  //     ],
  //     otherColumns: ["Register", "Balance", "Price", "Value"],
  //   },
  //   {
  //     id: "2",
  //     name: "BUYFIRST",
  //    // details:"",
  //  details: [],
  //     otherColumns: ["A2", "B2", "C2", "D2"],
  //   },
  //   {
  //     id: "3",
  //     name: "Common Stock 1",
  //    // details:"12334",
  //     details: [
  //       { key: "Detail 1", value: "D5" },
  //       { key: "Detail 2", value: "D6" },
  //     ],
  //     otherColumns: ["A3", "B3", "C3", "D3"],
  //   },
  //   {
  //     id: "4",
  //     name: "Common Stock 2",
  //     //details:"",
  //     details: [
  //       { key: "Detail 1", value: "D7" },
  //       { key: "Detail 2", value: "D8" },
  //     ],
  //     otherColumns: ["A4", "B4", "C4", "D4"],
  //   },
  //   {
  //     id: "5",
  //     name: "DSPP-SP1 R/T And Batch W/Fees",
  //     // details:"",
  //     details: [
  //       { key: "Detail 1", value: "D9" },
  //       { key: "Detail 2", value: "D10" },
  //     ],
  //     otherColumns: ["A5", "B5", "C5", "D5"],
  //   },
  // ];
  const DATA = [
    {
      id: "1",
      name: "Share Class",
     details:"rrr",
      // details: [
      //   { key: "Detail 1", value: "D1" },
      //   { key: "Detail 2", value: "D2" },
      //   { key: "Detail 3", value: "D3" },
      //   { key: "Detail 4", value: "D4" },
      // ],
      otherColumns: ["Register", "Balance", "Price", "Value"],
    },
    {
      id: "2",
      name: "BUYFIRST",
     details:"",
  //  details: [],
      otherColumns: ["A2", "B2", "C2", "D2"],
    },
    {
      id: "3",
      name: "Common Stock 1",
     details:"12334",
      // details: [
      //   { key: "Detail 1", value: "D5" },
      //   { key: "Detail 2", value: "D6" },
      // ],
      otherColumns: ["A3", "B3", "C3", "D3"],
    },
    {
      id: "4",
      name: "Common Stock 2",
      details:"",
      // details: [
      //   { key: "Detail 1", value: "D7" },
      //   { key: "Detail 2", value: "D8" },
      // ],
      otherColumns: ["A4", "B4", "C4", "D4"],
    },
    {
      id: "5",
      name: "DSPP-SP1 R/T And Batch W/Fees",
      details:"",
      // details: [
      //   { key: "Detail 1", value: "D9" },
      //   { key: "Detail 2", value: "D10" },
      // ],
      otherColumns: ["A5", "B5", "C5", "D5"],
    },
  ];
  const router = useRouter();
  const handleSignUp = () => {};
  return (
    <ScrollView>
      <MyButton title="Sign Up" onPress={handleSignUp} />
      <CollapsibleTable DATA={DATA} />
      {/* <MobileUI/> */}
    </ScrollView>
  );
}