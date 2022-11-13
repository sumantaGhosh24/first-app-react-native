import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ViewTextButton() {
  return (
    <View>
      <Text style={styles.heading}>
        This application running using expo, vscode and android emulator!
      </Text>
      <Text style={styles.message}>Finally this is working! 🎉🎉</Text>
      <Button
        accessibilityLabel="test"
        title="click me"
        color="orange"
        onPress={() => alert("welcome to my first react native application!")}
      />
      <Button
        accessibilityLabel="test"
        title="click me"
        color="orange"
        onPress={() => alert("welcome to my first react native application!")}
        disabled={true}
      />

      <TouchableOpacity
        onPress={() =>
          Alert.alert("Custom Button", "Custom button is working perfectly.")
        }
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Custom Button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 16,
    fontWeight: "medium",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
