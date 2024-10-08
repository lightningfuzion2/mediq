import { View, StyleSheet, Text } from "react-native";

export default function SelectedHeader() {
  return (
    <View style={[s.header, s.row]}>
      <View style={s.col}>
        <Text style={s.rheader}>Inv No</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Date</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>OS</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Collect</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  

  sm_col: { flex: 1 },

  rheader: {
    color: "black",
  },

  row: {
    height: 15,
    backgroundColor: "white",
    flexDirection: "row",
margin:10
  },
  col: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
