import { View } from 'react-native'
import React from 'react'
import OTPInput from './OTPInput'

export default function Cash(otp, setOtp) {
  return (
    <View>
        <OTPInput otp={otp} setOtp={setOtp} /> 
    </View>
  )
}