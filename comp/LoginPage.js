import { View, StyleSheet,ActivityIndicator } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import PhoneImg from "../assets/img/phone.png";
import KeyImg from "../assets/img/keys.png";
import PrimaryBtn from "./PrimaryBtn";
import { login } from "../helper/post";
import { setItemAsync } from "expo-secure-store";


export default function LoginPage({ setUser }) {
  const [ph, setPh] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const setLoginData = () => {
    setLoading(true);
    login({ ph, pass }).then((res) => {
      if (res.user) {
        setUser(res.user);
        setItemAsync('med_tkkk',res.token)
      }
      setLoading(false);
    });
  };

  if (loading) {
    return (
      <View style={s.container}>
               <ActivityIndicator color={"#202020"} size={"large"} />

      </View>
    );
  }

  return (
    <View style={s.container}>
      <FormInput
        img={PhoneImg}
        text={ph}
        setText={setPh}
        fontSize={30}
        marginBottom={50}
        letterSpacing={7}
        label="Phone Number"
        desc="enter registed phone number."
        keyboardType="numeric"
        errors={{}}
        attr="ph"
      />

      <FormInput
        img={KeyImg}
        text={pass}
        setText={setPass}
        fontSize={20}
        marginBottom={50}
        letterSpacing={1}
        label="Password"
        desc="enter password."
        errors={{}}
        attr="ph"
      />

      <PrimaryBtn onPress={setLoginData} text="LOGIN" />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "",
    alignContent: "center",
    justifyContent: "center",
  },
});
