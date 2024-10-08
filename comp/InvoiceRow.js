import React from "react";
import { View, StyleSheet, Text } from "react-native";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2,'');
  const month = String(date.getMonth()+1).padStart(2,''); // Month is 0-based
  const year = date.getFullYear() % 100;
  return `${day}/${month}/${year}`;
};

export default function InoviceRow({ item, sel }) {
  return (
    <View style={[s.row, sel ? s.rowSelected : null]}>
      <View style={s.col}>
        <Text style={[s.rdata, sel ? s.textSelected : null]}>{item.id}</Text>
      </View>
      <View style={s.col}>
        <Text style={[s.rdata, sel ? s.textSelected : null]}>{formatDate(item.date)}</Text>
      </View>
      <View style={s.col}>
        <Text style={[s.rdata, sel ? s.textSelected : null]}>{'₹ ' + item.bal_amt}</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  row: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    borderBottomWidth: 0.5, 
    borderBottomColor: "black",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  rowSelected: {
    backgroundColor: "black", 
    borderBottomColor: "white",
  },
  textSelected: {
    color: "white", 
  },
  col: {
    flex: 1,
    justifyContent: "center", // Vertically center the text inside each column
  },
  rdata: {
    color: "black",
    fontSize: 24,
    textAlign: 'center'
  },
});