import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import SearchImg from "../assets/img/search.png";

export default function FloatSearch({onPress}) {
    return (
        <View style={[s.container,s.center]}>
            <TouchableOpacity style={[s.round,s.center]} onPress={onPress}>
            <Image source={SearchImg} style={s.img} />
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    img: {
        width: 20,
        height: 20,
      },
    round:{
        height: 50,
        width:50,
        backgroundColor:'white',
        borderRadius:50,
    },
    container: {
        height:80,
        position: 'absolute',
        left:0,
        right:0,
        bottom:0,
    },
  });
  