import {useState} from "react";
import {Button, InputAccessoryView, Text, TextInput, View} from "react-native";

export default function PracticeAccessoryView() {
  const [info, setInfo] = useState("");
  const inputAccessoryViewId = "id";

  return (
    <View>
      <Text>Practice Accessory View (only for ios)</Text>
      <TextInput
        placeholder="Enter your information"
        onChange={(text) => setInfo(text)}
        value={info}
        inputAccessoryViewID={inputAccessoryViewId}
      />
      <InputAccessoryView nativeID={inputAccessoryViewId}>
        <Button title="Clear Text" onPress={() => setInfo("")} />
      </InputAccessoryView>
    </View>
  );
}
