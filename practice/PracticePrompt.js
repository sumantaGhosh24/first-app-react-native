import {useState} from "react";
import {Alert, Button, Text, View} from "react-native";

export default function PracticePrompt() {
  const [name, setName] = useState("");

  const clickMe = () => {
    Alert.prompt("Welcome", "Enter your name.", [
        {
            text: "submit",
            onPress: (text) => setName(text)
        },
        {
            text: "cancel",
            onPress: () => setName('guest')
        },
      ], "plain-text", "Name");
  };

  return (
    <View
      style={{display: "flex", alignItems: "center", justifyContent: "center"}}
    >
      <Text>{name}</Text>
      <Button title="click" onPress={clickMe} />
    </View>
  );
}
