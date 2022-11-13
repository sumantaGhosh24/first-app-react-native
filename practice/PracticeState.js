import {useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export default function PracticeState() {
  const [name, setName] = useState("John");

  return (
    <View style={styles.box}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonWrapper}>
        <Button title="jane" onPress={() => setName("jane")} />
        <Button title="john" onPress={() => setName("john")} />
        <Button title="unknown" onPress={() => setName("unknown")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
  },
  buttonWrapper: {
    width: 300,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
