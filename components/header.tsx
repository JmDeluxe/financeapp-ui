import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.BLACK,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 75,
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Image
            style={{ height: 58, width: 58, borderRadius: 30 }}
            source={{ uri: "https://i.pravatar.cc/150?img=60" }}
          />
          <View>
            <Text style={[style.textColor, { fontSize: 17, fontWeight: 300 }]}>
              Hi, Jenny
            </Text>
            <Text
              style={{ color: Colors.WHITE, fontSize: 18, fontWeight: 400 }}
            >
              Your <Text style={{ fontWeight: 500 }}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            borderWidth: 1,
            borderRadius: 15,
            borderColor: "#666",
            padding: 7,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 14,
              paddingHorizontal: 5,
            }}
          >
            My Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const style = StyleSheet.create({
  textColor: {
    color: Colors.WHITE,
  },
});
