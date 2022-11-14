import {useState} from "react";
import {Appearance, Text, TextInput, View} from "react-native";

export default function PracticeAppearance() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: colorScheme === "light" ? "white" : "gray",
      }}
    >
      <Text>Practice Appearance</Text>
      <TextInput
        style={{
          marginTop: 20,
          backgroundColor: colorScheme === "light" ? "gray" : "white",
          color: colorScheme === "light" ? "white" : "black",
        }}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <TextInput
        style={{
          marginTop: 20,
          backgroundColor: colorScheme === "light" ? "gray" : "white",
          color: colorScheme === "light" ? "white" : "black",
        }}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
      />
      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          color: colorScheme === "light" ? "black" : "white",
        }}
      >
        Your name is {name} and Your age is {age}.
      </Text>
    </View>
  );
}
