import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          backgroundColor: Colors.BLACK,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text style={style.text}>Profile Page</Text>
        <Fontisto name="netflix" size={24} color="black" />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  text: {
    color: Colors.WHITE,
  },
});
