import React from "react";
import { ScrollView, StatusBar,View } from "react-native";
import Header from "./SettingsHeader";
import SettingList from "./SettingList";


export default function Settings({ nav, sman }) {
  return (
    <View>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <ScrollView style={{ backgroundColor: "white" }}>
      <Header nav={nav} sman={sman}/>
        <SettingList />
      </ScrollView>
    </View>
  );
}