import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { IncomeType } from "@/scripts/types";
import Feather from "@expo/vector-icons/Feather";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    const amount = item.amount.toString().split(".");

    return (
      <View
        style={{
          backgroundColor: Colors.GRAY,
          padding: 20,
          borderRadius: 20,
          gap: 5,
          marginRight: 20,
          width: 150,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: "#666",
              padding: 7,
              alignSelf: "flex-start",
            }}
          >
            <Feather
              name={
                item.name == "Brannon"
                  ? "dollar-sign"
                  : item.name == "Rosabel"
                  ? "archive"
                  : "battery-charging"
              }
              size={15}
              color={Colors.WHITE}
            />
          </View>
          <TouchableOpacity>
            <Feather name="more-horizontal" size={24} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>

        <Text style={{ color: Colors.WHITE }}>{item.name}</Text>
        <Text style={{ color: Colors.WHITE, fontWeight: "bold", fontSize: 20 }}>
          $ {amount[0]}.
          <Text style={{ fontSize: 15, fontWeight: 300 }}>{amount[1]}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 20 }}>
      <Text
        style={{
          color: Colors.WHITE,
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        My{" "}
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Income
        </Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});
