import { StyleSheet, ScrollView, TouchableOpacity, View } from "react-native";
import React from 'react';
import InoviceHeader from "./InoviceHeader";
import InoviceRow from "./InvoiceRow";

export default function InoviceTable({ setSelected, selected, invoices }) {

  return invoices.length > 0 ? (
    <View style={s.container}>
      
      <View style={s.header}>
        <InoviceHeader />
      </View>

      <ScrollView style={s.scroll}>
        {invoices.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => setSelected(item)}>
            <InoviceRow
              sel={item.id in selected ? true : false}
              item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  ) : (
    ""
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    zIndex: 1,
  },
  scroll: {
    flex: 1,
    marginTop: 5,
  },
});