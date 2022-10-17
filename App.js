import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Button, StyleSheet, Text, View} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>counting app</Text>
      <Button
        onPress={() => setCount((prevCount) => prevCount - 1)}
        title="-"
      />
      <Text style={styles.paragraph}>count {count}</Text>
      <Button
        onPress={() => setCount((prevCount) => prevCount + 1)}
        title="+"
      />
      <StatusBar style="auto" />
    </View>
  );
}

// https://reactnative.dev/docs/getting-started
// https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#manual-installation
// https://reactnavigation.org/docs/getting-started/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 40,
    textTransform: "uppercase",
  },
  paragraph: {
    color: "gray",
    fontSize: 30,
    textTransform: "capitalize",
  },
});
