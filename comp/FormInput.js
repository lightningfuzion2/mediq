import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Input from "./Input";

export default function FormInput({
  img,
  label,
  desc,
  text,
  setText,
  keyboardType,
  letterSpacing,
  placeholder,
  marginBottom,
  errors,
  attr,
  props,
  fontSize
}) {
  let KeyboardType = keyboardType?.length >= 1 ? keyboardType : "default";
  return (
    <View style={[s.container, { marginBottom }]}>
      {label?.length >= 1 && desc?.length >= 1 && (
        <View style={s.row}>
          {img && (
            <View style={s.col}>
              <Image source={img} style={s.img} />
            </View>
          )}
          <View style={s.col_lg}>
            <Text style={s.label}>{label}</Text>
            {desc && <Text style={s.desc}>{desc}</Text>}
            {errors && errors[attr] && (
              <Text style={s.error}>{errors[attr]}</Text>
            )}
          </View>
        </View>
      )}
      <View style={s.row}>
        <Input
          text={text}
          setText={setText}
          fontSize={fontSize}
          keyboardType={KeyboardType}
          placeholder={placeholder}
          letterSpacing={letterSpacing}
          attr={attr}
          props={props}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  label: {
    fontSize: 22,
  },
  desc: {
    color: "grey",
    fontSize: 12,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
  container: {
    marginVertical: 10,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  col: {
    flex: 1,
  },
  col_lg: {
    flex: 6,
    position: "relative",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
