import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { Stack, useNavigation } from "expo-router";
import Header from "@/components/header";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View
        style={{
          backgroundColor: Colors.BLACK,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={style.text}>Index Page</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  text: {
    color: Colors.WHITE,
  },
});
