import {Button} from "@rneui/themed";
import {Text, View} from "react-native";

export default function PracticeButton() {
  return (
    <View>
      <Text>Practice Button</Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="success">Error</Button>
      </View>
    </View>
  );
}
