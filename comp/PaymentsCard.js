import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function PaymentsRow({ item }) {
  return (
    <View style={[s.row]}>
        <View style={[s.col,s.sm_col]}>
          <Text style={s.rdata}>{item.id}</Text>
        </View>
        <View style={[s.col,s.sm_col]}>
          <Text style={s.rdata}>{item.amt}</Text>
        </View>
        <View style={[s.col,s.sm_col]}>
          <Text style={s.rdata}>{item.inovice_id}</Text>
        </View>
        <View style={s.col}>
          <Text style={s.rdata}>{item.date}</Text>
        </View>
        <View style={[s.col,s.sm_col]}>
          <Text style={s.rdata}>{item.bal_amt}</Text>
        </View>
    </View>
  );
}

const s = StyleSheet.create({
  box: {
    height: 25,
    width: 25,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: "black",
  },
  box_outline: {
    borderWidth: 1,
    height: 25,
    borderRadius: 10,
    width: 25,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  sm_col: { flex: 1 },
  rheader: {
    color: "black",
  },
  rdata: {
    color: "black",
  },
  srow: {
    flexDirection:'row',
    flex : 1,
  },
  row: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  col: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
