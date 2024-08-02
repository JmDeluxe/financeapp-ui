import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function Transaction() {
  return (
    <>
      <Stack.Screen options={{}} />
      <View
        style={{
          backgroundColor: Colors.BLACK,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Text style={style.text}>Transaction</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  text: {
    color: Colors.WHITE,
  },
});
