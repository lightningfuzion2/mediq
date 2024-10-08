import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PartySearchCard({ party, onPress, setVisable }) {
  return (
    <TouchableOpacity onPress={() => { onPress(party); }} key={party.id}>
      <View style={s.card}>
        <Text style={s.code}>{party.code}</Text>
        <Text style={s.name}>{party.name}</Text>
        {party.a1 ? <Text style={s.addr}>{party.a1}</Text> : null}
        {party.a2 ? <Text style={s.addr}>{party.a2}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: "bold",  // Highlight the party name
  },
  code: {
    fontWeight: "600",  // Slightly bold
    marginTop: 2,
  },
  addr: {
    color: "black",  // Softer color for the address
    fontSize: 14,
    marginTop: 2,
  },
  card: {
    padding: 12,
    backgroundColor: "white",
    margin: 5,
    borderColor: 'black',
    borderWidth: 0.2,  // Slightly more visible border
  },
});