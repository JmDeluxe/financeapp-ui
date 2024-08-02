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
import { ExpenseType } from "@/scripts/types";
import AntDesign from "@expo/vector-icons/AntDesign";

const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderStyle: "dashed",
            borderRadius: 20,
            borderColor: "#ccc",
            marginRight: 20,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="plus" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>
      );
    }

    let amount = item.ammount?.toString().split(".") || ["0", "00"];

    return (
      <View
        style={{
          backgroundColor:
            item.name == "Melonie"
              ? Colors.BLUE
              : item.name === "Alleen"
              ? Colors.WHITE
              : Colors.TINTCOLOR,
          width: 100,
          padding: 15,
          paddingVertical: 17,
          borderRadius: 15,
          marginRight: 20,
          justifyContent: "space-evenly",
          gap: 10,
        }}
      >
        <Text
          style={[
            styles.expenseTxt1,
            {
              color:
                item.name == "Melonie"
                  ? Colors.BLACK
                  : item.name === "Alleen"
                  ? Colors.BLACK
                  : Colors.WHITE,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.expenseTxt2,
            {
              color:
                item.name == "Melonie"
                  ? Colors.BLACK
                  : item.name === "Alleen"
                  ? Colors.BLACK
                  : Colors.WHITE,
              fontSize: 20,
            },
          ]}
        >
          ${amount[0]}.
          <Text
            style={[
              styles.expenseBlockTxt2Span,
              { fontWeight: 400, fontSize: 15 },
            ]}
          >
            {amount[1]}
          </Text>
        </Text>
        <Text
          style={{
            color:
              item.name == "Melonie"
                ? Colors.BLACK
                : item.name === "Alleen"
                ? Colors.BLACK
                : Colors.WHITE,
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 7,
            borderColor: "#666",
            backgroundColor: "rgba(255,255,255,0.15)",
            width: "70%",
          }}
        >
          {item.percentage}
          <Text style={{ fontSize: 15 }}>%</Text>
        </Text>
      </View>
    );
  };

  const staticItem = [{ name: "Add item" }];

  return (
    <View>
      <FlatList
        data={staticItem.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expenseTxt1: {
    color: Colors.WHITE,
    fontSize: 14,
  },
  expenseTxt2: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: "600",
  },
  expenseBlockTxt2Span: {
    fontSize: 12,
    fontWeight: "400",
  },
});
