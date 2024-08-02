import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { Stack, useNavigation } from "expo-router";
import Header from "@/components/header";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ExpenseBlock";
import Expense from "@/data/expenses.json";
import Income from "@/data/income.json";
import Spending from "@/data/spending.json";
import IncomeBlock from "@/components/IncomeBlock";
import SpendingBlock from "@/components/SpendingBlock";

export default function Page() {
  const pieData = [
    {
      value: 47,
      color: "#009FFF",
      gradientCenterColor: "#006DFF",
      focused: true,
    },
    { value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
    { value: 16, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97" },
  ];

  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View
        style={{
          backgroundColor: Colors.BLACK,
          height: "100%",
          paddingTop: 80,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={[style.text, { fontSize: 20 }]}>
                My <Text style={{ fontSize: 20 }}>Expenses</Text>
              </Text>
              <Text style={[style.text, { fontSize: 30, fontWeight: "bold" }]}>
                $ 1,475.
                <Text style={{ fontWeight: 400, fontSize: 20 }}>00</Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.BLACK}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <ExpenseBlock expenseList={Expense} />
          <IncomeBlock incomeList={Income} />
          <SpendingBlock spendingList={Spending} />
        </ScrollView>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  text: {
    color: Colors.WHITE,
  },
});
