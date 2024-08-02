import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/scripts/types";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  const renderItem: ListRenderItem<SpendingType> = ({ item, index }) => {
    const amount = item.amount.toString().split(".");

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          alignItems: "center",
          backgroundColor: Colors.GRAY,
          marginBottom: 10,
          paddingHorizontal: 5,
          borderRadius: 20,
          gap: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 15,
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              backgroundColor: Colors.GRAY,
              borderColor: "#666",
              padding: 8,
              borderRadius: 20,
            }}
          >
            <Feather
              name={
                item.name == "Craggie"
                  ? "battery"
                  : item.name == "Clotilda"
                  ? "award"
                  : "bell"
              }
              size={20}
              color={Colors.WHITE}
            />
          </View>
          <View style={{ gap: 4 }}>
            <Text style={{ color: Colors.WHITE, fontSize: 17 }}>
              {item.name}
            </Text>
            <Text style={{ color: Colors.WHITE, fontWeight: 300 }}>
              {item.date}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ color: Colors.WHITE, fontWeight: 600, fontSize: 17 }}>
            ${amount[0]}.
            <Text
              style={{ color: Colors.WHITE, fontWeight: 600, fontSize: 14 }}
            >
              {amount[1]}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View>
        <Text
          style={{
            color: Colors.WHITE,
            marginBottom: 15,
          }}
        >
          July <Text style={{ fontWeight: "bold" }}>Spending</Text>
        </Text>
        <FlatList
          data={spendingList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({});
