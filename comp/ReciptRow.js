import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ReciptRow({ item }) {
  return (
    <View style={[s.row]}>
      <View style={[s.srow]}>
        <View style={s.col}>
          <Text style={s.rdata}>{item.pname}</Text>
        </View>
      </View>
      <View style={[s.srow]}>
        <View style={s.col}>
          <Text style={s.rdata}>{item.id}</Text>
        </View>
        <View style={s.col}>
          <Text style={s.rdata}>{item.date}</Text>
        </View>
        <View style={s.col}>
          <Text style={s.rdata}>{item.amount}</Text>
        </View>
        <View style={s.col}>
          <Text style={s.rdata}>{item.mode}</Text>
        </View>
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
    borderRadius: 20,
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
    color: "grey",
  },
  srow: {
    flexDirection:'row',
    flex : 1,
  },
  row: {
    height: 60,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "column",
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
