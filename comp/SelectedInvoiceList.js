import PrimaryBtn from "./PrimaryBtn";
import SelectedHeader from "./SelectedHeader";
import SelectedRow from "./SelectedRow";
import { StyleSheet, View, ScrollView } from "react-native";

export default function SelectedInvoiceList({ items, setSelected, setStep, amt }) {
  const onChange = (text, item) => {
    let new_items = { ...items };
    for (const key in new_items) {
      if (item.id === new_items[key].id) {
        const value = parseInt(text);
        if (value > new_items[key].bal_amt) {
          new_items[key].amt_paid = new_items[key].bal_amt;
        } else if (value < 0) {
          new_items[key].amt_paid = 0;
        } else {
          new_items[key].amt_paid = isNaN(value) ? 0 : value;
        }
      }
    }
    setSelected(new_items);
  };

  return (
    <View style={s.container}>
      <SelectedHeader />
      <ScrollView style={s.scroll}>
        {Object.keys(items).map((key) => (
          <SelectedRow key={items[key].id} item={items[key]} onChange={onChange} />
        ))}
      </ScrollView>
      <PrimaryBtn onPress={() => setStep(2)} text={"Collect ₹ " + amt} />
    </View>
  );
}

const s = StyleSheet.create({
  scroll: {
    maxHeight: 500, // This controls the scroll area height
  },
  container: {
    alignContent: 'center',
    justifyContent: 'center',
    maxHeight: 500, 
  },
});