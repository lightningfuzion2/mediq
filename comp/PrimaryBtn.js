import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function PrimaryBtn({onPress, text}) {
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
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    
    round:{
        height: 50,
        width:150,
        backgroundColor:'black',
    },
    container: { alignItems:'center',
        justifyContent:'center',
        height:80,
    },
  });
  