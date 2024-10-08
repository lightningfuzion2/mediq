import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { fetchRecipts, fetchPayments } from "../helper/get";
import ReciptTitle from "./ReciptTitle";
import ReciptTable from "./ReciptTable";
import PaymetnsModal from "./PaymentsModal";

export default function ReciptPage() {

  const [recipts, setRecipts] = React.useState([]);
  const [selected, setSelected] = React.useState({});
  const [payments, setPayments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [visable, setVisable] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchRecipts().then((res) => {setRecipts(res);setLoading(false);});
  }, []);

  React.useEffect(() => {
    if(Object.keys(selected).length != 0){
      setLoading(true);
      fetchPayments(selected.id).then((res) => {setPayments(res);setLoading(false);setVisable(true)});
    }
  }, [selected]);


  React.useEffect(() => {
  }, [selected]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color={"#202020"} size={"large"} />
      </View>
    );
  }

  return (
    <View style={s.container}>
      <ReciptTitle/>
      <ReciptTable recipts={recipts} setSelected={setSelected} />
      <PaymetnsModal visable={visable} setVisable={setVisable} payments={payments}/>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    paddingTop: 40,
    position: "relative",
    backgroundColor: "white",
    flex: 1,
  },
});
