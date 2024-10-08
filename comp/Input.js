import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function Input({
  text,
  setText,
  keyboardType,
  placeholder,
  letterSpacing,
  fontSize
}) {
  return (
    <View style={s.input_div}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={[s.input]}
        value={text}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        onChangeText={setText}
      />
    </View>
  );
}

const s = StyleSheet.create({
  input_div: {
    height: 70,
    borderColor: "lightgrey",
    borderWidth: 1,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    paddingLeft: 15,
    fontWeight:"100",
    width: "100%",
    flex: 1,
    height: 45,
  },
});