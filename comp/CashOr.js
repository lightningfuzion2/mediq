import { View, StyleSheet } from "react-native";
import React from "react";
import PrimaryBtn from "./PrimaryBtn";

export default function CashOr({ setOption, setStep }) {

  const handleCash = () => {
    setStep(3);
  }
  const handleCheque = () => {
    setStep(4);
  }

  return (
    <View style={s.container}>
      
      <View style={s.row}>
        <PrimaryBtn onPress={handleCash} text="CASH" />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row:{
    flex: 1,
    margin: 10,
  },
  container: {
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
});
