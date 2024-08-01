import { View, Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Page() {
  return (
    <View
      style={{
        backgroundColor: Colors.black,
        paddingHorizontal: 20,
        height: "100%",
      }}
    >
      <Text>Index Page</Text>
    </View>
  );
}
