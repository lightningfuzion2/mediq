import React, { useEffect } from "react";
import { View, StyleSheet, BackHandler, Modal, TouchableOpacity } from "react-native";
import SelectedInvoiceSteps from "./SelectedInvoiceSteps";

export default function SelectedInvoiceModal({ amt, visable, setVisable, inovices, setSelected, party }) {

  useEffect(() => {
    const handleBackPress = () => {
      if (visable) {
        setVisable(false);
        return true;
      }
      return false;
    };

    if (visable) {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );
      return () => backHandler.remove();
    }
  }, [visable]);

  return (
    <Modal
      visible={visable}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setVisable(false)}
    >
      <View style={s.container}>
        <TouchableOpacity
          style={s.backdrop}
          activeOpacity={1}
          onPress={() => setVisable(false)}
        />

        <View style={s.modalContent}>
          <SelectedInvoiceSteps
            amt={amt}
            inovices={inovices}
            setSelected={setSelected}
            party={party}
            setVisable={setVisable}
          />
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  backdrop: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    maxHeight: 500,
  },
});