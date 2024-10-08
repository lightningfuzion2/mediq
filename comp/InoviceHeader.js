import { View, StyleSheet, Text } from "react-native";

export default function InoviceHeader() {
  return (
    <View style={[s.rheader, s.row]}>
      <View style={s.col}>
        <Text style={s.rheader}>Inv No</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Date</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Balance</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({

  sm_col: { flex: 1 },

  rheader: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center'
  },
  row: {
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    borderBottomWidth: 0.5, 
    borderBottomColor: "black",
    justifyContent: "center",
    paddingHorizontal: 24
  },
  col: {
    flex: 1,
    justifyContent: "center",
  },
});
