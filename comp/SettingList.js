import React from "react";
import { View, StyleSheet } from "react-native";
import SettingListItem from "./SettingListItem";
import TransactionsImg from "../assets/img/toc.png";
import receive from "../assets/img/receive.png";
import download from "../assets/img/download.png";
import { handleUpdatePress } from "../helper/UpdateDB";  // Ensure correct path to updateDB

export default function SettingList() {
  return (
    <View style={s.container}>
      <SettingListItem
        name="PartyPage"
        title="Collect Party Payments"
        img={receive}
      />
      <SettingListItem
        name="Collection Statements"
        title="Collection Statements"
        img={TransactionsImg}
      />
      <SettingListItem
        title="Update"
        img={download}
        onPress={handleUpdatePress}  // Trigger the sync directly
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});