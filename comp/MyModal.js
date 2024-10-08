import React, { useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, BackHandler } from 'react-native';

export default function MyModal({ visable, setVisable, children }) {

  useEffect(() => {
    const handleBackPress = () => {
      if (visable) {
        setVisable(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackPress
    );


    return () => {
      backHandler.remove();
    };
  }, [visable]);

  return (
    <Modal animationType="fade" transparent={true} visible={visable} onRequestClose={() => setVisable(false)}>
      <View style={s.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            setVisable(false); // Close modal when tapping on the greyed-out area
          }}
        >
          <View style={s.empty}></View>
        </TouchableWithoutFeedback>
        <View style={s.bottom}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const s = StyleSheet.create({
  bottom: {
    backgroundColor: "white",
    padding: 10,
    maxHeight: 800,
  },
  empty: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
});