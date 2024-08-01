import { View, Text } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "@/constants/Colors";

export default function Page() {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text>Profile Page</Text>
      <Fontisto name="netflix" size={24} color="black" />
    </View>
  );
}
