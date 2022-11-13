import {useState} from "react";
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function PracticeAlert() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");

  const handleEligibility = () => {
    if (age >= 18) {
      Alert.alert(`Hello ${name}, You can use this.`);
    } else if (age >= 14 && age <= 17) {
      Alert.alert(`Hello ${name}, Before use this, consult with your parents.`);
    } else {
      Alert.alert(`Hello ${name}, You can not use this.`);
    }
  };

  const handleCustomAlert = () => {
    Alert.alert(
      `Hello, ${name}`,
      "Our application using cookie for better experience, please accept our cookie policy for better user experience.",
      [
        {
          text: "Yes",
          onPress: () =>
            setMessage(
              "Hurray! You accept our cookie policy, now enjoy our services"
            ),
        },
        {
          text: "Not",
          onPress: () =>
            setMessage(
              "Warning! You decline our cookie policy, some feature of our application may not working, anyway enjoy our services."
            ),
        },
      ]
    );
  };

  const checkValidation = !name || !age || !gender;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
          placeholder="Enter your age"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setGender(text)}
          placeholder="Enter your gender"
        />
        <Button
          title="Can I use This"
          onPress={() => handleEligibility()}
          disabled={checkValidation}
        />
        <Button
          title="Custom Alert"
          onPress={() => handleCustomAlert()}
          disabled={checkValidation}
        />
        {!checkValidation && (
          <Text>
            Your name is {name}, Your age is {age} and Your gender is {gender}
          </Text>
        )}
        {message && <Text>{message}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "blue",
    padding: 20,
    borderColor: "gray",
    borderWidth: 2,
    marginTop: 15,
    marginBottom: 15,
    width: 300,
    color: "white",
    borderRadius: 7,
    fontSize: 18,
  },
});
