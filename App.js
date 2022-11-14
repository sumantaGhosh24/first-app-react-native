import {StatusBar} from "expo-status-bar";
import {Platform, StyleSheet, Text, View} from "react-native";

import {} from "./practice";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>OS = {Platform.OS}</Text>
        <Text>OS Version = {Platform.Version}</Text>
        <Text>Is TV = {Platform.isTV.toString()}</Text>
        {Platform.OS === "ios" && (
          <>
            <Text>Is Pad {Platform.isPad.toString()}</Text>
          </>
        )}
        <Text>Constants {JSON.stringify(Platform.constants, null, 2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 25,
  },
});
