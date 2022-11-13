import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";

import {PracticeModal} from "./practice";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <PracticeModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
