import { View, StyleSheet, Text } from "react-native";

export default function PaymentHeader() {
  return (
    <View style={[s.header, s.row]}>
      <View style={s.col}>
        <Text style={s.rheader}>Rec No</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Inv No</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Rec Amt</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Inv Dt</Text>
      </View>
      <View style={s.col}>
        <Text style={s.rheader}>Bal Amt</Text>
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
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  col: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
