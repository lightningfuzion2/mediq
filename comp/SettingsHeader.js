import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SettingsHeader({ sman }) {
  return (
    <View style={s.container}>
      <View style={[s.col, { flex: 2 }]}>
        <Text style={[s.name]} >{sman.sman}</Text>
      </View>
      <View style={[s.col, s.end]}>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
  },
  end: {
    justifyContent: 'center',
    alignItems: "center"
  },
  col: {
    flex: 1,
    padding: 10,
  },
  name: {
    color: 'black',
    fontSize: 20
  },
  profile: {
    width: 10,
    height: 10,
  },
});