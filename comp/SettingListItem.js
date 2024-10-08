import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingListItem({ img, name, onPress, svg, title }) {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={onPress ? () => onPress() : () => nav.navigate(name)} // Trigger onPress if provided
    >
      <View style={s.container}>
        {img && (
          <View style={s.col}>
            {svg ? img : <Image style={s.img} source={img} />}
          </View>
        )}
        <View style={[s.col, s.col_lg]}>
          <Text style={s.text}>{title ? title : name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    paddingLeft: 12,
    flexDirection: "row",
    marginVertical: 5,
    borderWidth: 0.2,
    borderColor: "black",
    padding: 10,
  },
  text: {
    fontSize: 26,
    color: "black",
  },
  col: {
    flex: 1,
    justifyContent: "center",
  },
  col_lg: {
    flex: 7,
  },
  img: {
    width: 36,
    height: 36,
  },
});