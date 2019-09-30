import React from "react";
import { Modal, View, Image, StyleSheet } from "react-native";
import WText from "../WText";

const DisplayModal = props => (
  <Modal
    visible={props.display}
    animationType="slide"
    onRequestClose={() => console.log("closed")}
  >
    <View>
      <WText style={styles.text}>hj</WText>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  image: {
    marginTop: 20,
    marginLeft: 90,
    height: 200,
    width: 200
  },
  text: {
    fontSize: 20,
    marginLeft: 150
  }
});

export default DisplayModal;
