import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import SearchImg from "../assets/img/search.png";

export default function Search({ text, setText }) {

  return (
      <View style={s.conatiner}>
        <View style={s.col_l}>
          <Image source={SearchImg} style={s.img} />
        </View>
        <TextInput
          style={s.input}
          value={text}
          placeholder="Search"
          onChangeText={setText}
          placeholderTextColor="black"
          autoFocus={true}
        />
      </View>
  );
}

const s = StyleSheet.create({
  col_l: {
    position: "absolute",
    left: 20,
  },

  img: {
    width: 20,
    height: 20,
    tintColor: "black",
  },

  input: {
    width: "100%",
    borderRadius: 10,
    paddingLeft: 55,
    fontSize: 16,
    color: "black",
  },
  conatiner: {
    margin:5,
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 0.2
  },
});
