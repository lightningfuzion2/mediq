import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import MyModal from "./MyModal";
import PaymentsCard from "./PaymentsCard";
import XImg from "../assets/img/X.png";
import PaymentHeader from "./PaymentHeader";

export default function PaymetnsModal({ visable, setVisable, payments }) {
  return (
    <MyModal
      setVisable={setVisable}
      visable={visable}
      children={
        <View style={s.con}>
          <PaymentHeader />
          <ScrollView viewStyle={s.scroll} style={s.scroll}>
            {payments.map((payment) => (
              <PaymentsCard key={payment.id} item={payment} />
            ))}
          </ScrollView>
          <TouchableOpacity style={s.close} onPress={() => setVisable(false)}>
            <Image source={XImg} style={s.img} />
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const s = StyleSheet.create({
  scroll: {
    height: 350,
    margin: 10,
  },
  con: {
    height: 400,
    backgroundColor: "white",
  },
  close: {
    margin: 10,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
  },
});
