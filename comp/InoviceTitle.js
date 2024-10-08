import { StyleSheet, Text, View } from "react-native"; // Add View to the import

export default function InoviceTitle({ os, party }) {
  return (
    <View>
      <Text style={s.title}>
        COLLECT PAYMENTS {os ? <Text style={s.os}>₹ {os}</Text> : ""}
      </Text>
      {party && (party.code || party.name) ? (
        <Text style={s.name}>
          {party.code ? party.code : ""} {party.name ? party.name : ""}
        </Text>
      ) : (
        <Text style={s.name}>No Party Selected</Text>
      )}
    </View>
  );
}

const s = StyleSheet.create({
  os: {
    fontSize: 15,
    color: "black",
  },
  name: {
    fontSize: 20,
    textAlign: "left",
    color: "black",
    marginLeft: 10,
  },
  title: {
    paddingTop: 10,
    fontSize: 25,
    textAlign: "left",
    fontWeight: "300",
    marginLeft: 10,
  },
});