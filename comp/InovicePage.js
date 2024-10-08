import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, BackHandler } from "react-native";
import { fetchInovices } from "../helper/get";
import InoviceCollectBtn from "./InoviceCollectBtn";
import InoviceTitle from "./InoviceTitle";
import InoviceTable from "./InoviceTable";
import SelectedInvoiceModal from "./SelectedInvoiceModal";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function InovicePage() {
  const [reciptVisable, setReciptVisable] = React.useState(false);
  const [party, setParty] = React.useState(null);
  const [invoices, setInvoices] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState({});
  const [os, setOs] = React.useState("");

  const navigation = useNavigation();  // Navigation object
  const route = useRoute();  // Route object to access passed params

  // Set party from route params when InvoicePage is opened
  useEffect(() => {
    if (route.params && route.params.party) {
      setParty(route.params.party);
    }
  }, [route.params]);

  const addToSelectedObj = (inovice) => {
    let sel = { ...selected };
    if (inovice.id in selected) {
      delete sel[inovice.id];
    } else {
      sel[inovice.id] = inovice;
      sel[inovice.id]["amt_paid"] = inovice.bal_amt;
    }
    setSelected(sel);
  };

  const caclSelectedAmt = () => {
    let amt = 0;
    for (let key in selected) {
      amt += selected[key].amt_paid;
    }
    return amt;
  };

  const calculateOS = () => {
    let amt = 0;
    invoices.forEach((inovice) => {
      amt += inovice.amt_paid;
    });
    setOs(amt);
  };

  // Fetch invoices when a party is selected
  useEffect(() => {
    if (party) {
      setLoading(true);
      fetchInovices(party.id).then((res) => {
        setInvoices(res);
        setLoading(false);
      });
      setSelected({});
    }
  }, [party]);

  useEffect(() => {
    if (invoices.length > 0) calculateOS();
  }, [invoices]);

  const selAmt = caclSelectedAmt();

  // Handle back button press
  useEffect(() => {
    const backAction = () => {
      // Instead of navigate, we go back to PartyPage
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [party]);

  // Show loading spinner when data is being fetched
  if (loading) {
    return (
      <View style={s.loadingContainer}>
        <ActivityIndicator color={"black"} size={"large"} />
      </View>
    );
  }

  // Render the invoice page when the party is selected
  return (
    <View style={s.container}>
      <InoviceTitle party={party} os={os} />
      <InoviceTable
        selected={selected}
        invoices={invoices}
        setSelected={addToSelectedObj}
      />
      <SelectedInvoiceModal
        amt={selAmt}
        fetchInovices={fetchInovices}
        visable={reciptVisable}
        setVisable={setReciptVisable}
        inovices={selected}
        setSelected={setSelected}
        party={party}
      />
      <InoviceCollectBtn
        amount={selAmt}
        onPress={() => setReciptVisable(true)}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingBottom: 80,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});