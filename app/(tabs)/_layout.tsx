import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Tabs, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.GRAY,
            position: "absolute",
            bottom: 45,
            // justifyContent: "center",
            // alignSelf: "center",
            height: 63,
            marginHorizontal: 90,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 40,
            paddingBottom: 10,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.WHITE,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  paddingHorizontal: 19,
                  backgroundColor: focused ? Colors.TINTCOLOR : Colors.GRAY,
                }}
              >
                <AntDesign name="linechart" size={24} color={color} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  paddingHorizontal: 19,
                  backgroundColor: focused ? Colors.TINTCOLOR : Colors.GRAY,
                }}
              >
                <AntDesign name="user" size={24} color={color} />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="transaction"
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  paddingHorizontal: 19,
                  backgroundColor: focused ? Colors.TINTCOLOR : Colors.GRAY,
                }}
              >
                <AntDesign name="swap" size={24} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
