import {useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";

export default function PracticeTextInput() {
  const [name, setName] = useState("john");
  const [age, setAge] = useState(20);

  return (
    <View style={styles.box}>
      <Text>
        My name is {name} and my age is {age}
      </Text>
      <Text>Enter your name : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Text>Enter your age : </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 250,
  },
});
