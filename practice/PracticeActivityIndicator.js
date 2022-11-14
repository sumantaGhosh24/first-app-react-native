import {useState} from "react";
import {ActivityIndicator, Alert, Button, Text, View} from "react-native";

export default function PracticeActivityIndicator() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      Alert.alert("Success!", "the work is done.");
    }, 5000);
  };

  return (
    <View>
      <Text>Practice Activity Indicator</Text>
      <ActivityIndicator size="large" color="red" animating={show} />
      <Button title="loading" onPress={handleClick} />
    </View>
  );
}
