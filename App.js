import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";

import {ViewTextButton, PracticeState, PracticeTextInput} from "./practice";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ViewTextButton /> */}
      {/* <PracticeState /> */}
      <PracticeTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
