import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function SelectedRow({ item, onChange }) {
  return (
    <View style={[s.row]}>
      <View style={s.col}>
        <Text style={s.rdata}>{item.id}</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rdata}>{item.date}</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rdata}>{item.bal_amt}</Text>
      </View>
      <View style={s.col}>
        <TextInput
          style={s.input}
          selectTextOnFocus={true}
          value={item.amt_paid.toString()}
          keyboardType="numeric"
          onChangeText={(text) => {
            const newValue = text === '' ? 0 : parseFloat(text);
            onChange(newValue, item);
          }}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  rdata: {
    color: "black",
    fontSize: 18,
  },
  danger: { borderColor: "tomato" },
  input: {
    borderColor: "black",
    fontSize: 20,
    borderWidth: 1,
    height: 40,
    width: 80,
    textAlign: "center",
  },
  row: {
    height: 35,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 5
  },
  col: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});