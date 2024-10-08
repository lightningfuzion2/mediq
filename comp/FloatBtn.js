import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function FloatBtn({onPress, text}) {
    return (
        <View style={[s.container,s.right]}>
            <TouchableOpacity style={[s.round,s.center]} onPress={onPress}>
                <Text style={s.txt} >{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const s = StyleSheet.create({
    txt:{
        color:"white",
        textAlign: 'center',
    },
    right:{
        alignItems:'flex-end',
        justifyContent:'center',
        right: 20,
    },
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
        width:150,
        backgroundColor:'black',
    },
    container: {
        height:80,
        position: 'absolute',
        left:0,
        right:0,
        bottom:0,
    },
  });
  