import { StyleSheet, Text } from "react-native";

export default function ReciptTitle() {
  return (
    <>
      <Text style={s.title}>
        Recipt
      </Text>
      {/* <Text style={s.name}>
        <Text style={s.code}>{party.code}</Text>
      </Text> */}
    </>
  );
}

const s = StyleSheet.create({
  os: {
    fontSize: 15,
    color: "grey",
  },
  name: {
    fontSize: 15,
    color: "grey",
    marginLeft: 20,
  },
  code: {
    marginLeft: 20,
    fontSize: 15,
    color: "grey",
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "300",
    marginLeft: 20,
    marginBottom : 10,
  },
});
