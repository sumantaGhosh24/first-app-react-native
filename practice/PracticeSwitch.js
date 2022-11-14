import {useState} from "react";
import {StyleSheet, Switch, Text, View} from "react-native";

export default function PracticeSwitch() {
  const [enable, setEnable] = useState(false);

  const handleToggle = () => {
    setEnable(!enable);
  };

  return (
    <View>
      <Text>Practice Switch</Text>
      <Switch
        trackColor={{false: "red", true: "green"}}
        thumbColor={enable ? "yellow" : "pink"}
        onValueChange={handleToggle}
        value={enable}
        ios_backgroundColor="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
