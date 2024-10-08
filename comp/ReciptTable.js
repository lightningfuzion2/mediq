import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ReciptHeader from "./ReciptHeader";
import ReciptRow from "./ReciptRow";

export default function ReciptTable({ recipts, setSelected }) {
  const inv = recipts.slice(0, recipts.length);

  return recipts.length > 0 ? (
    <ScrollView style={s.scroll}>
      <ReciptHeader />
      {inv.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => setSelected(item)}>
          <ReciptRow item={item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  ) : (
    ""
  );
}

const s = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },
});