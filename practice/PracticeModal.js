import {useState} from "react";
import {Button, Modal, StyleSheet, Text, View} from "react-native";

export default function PracticeModal() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Practice Modal</Text>
      <Modal visible={open}>
        <View style={styles.main}>
          <Text style={styles.modal}>Modal Inner</Text>
          <Button title="Close Modal" onPress={() => setOpen(false)} />
        </View>
      </Modal>
      <Button title="Open Modal" onPress={() => setOpen(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  modal: {
    height: 200,
    width: 200,
    backgroundColor: "green",
  },
});
