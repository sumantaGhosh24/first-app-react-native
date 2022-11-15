import {useEffect} from "react";
import {Alert, BackHandler, Text, View} from "react-native";

export default function PracticeBackHandler() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Stop", "Are your sure you want to go back.", [
        {text: "Cancel", onPress: () => null, styles: "cancel"},
        {text: "Yes", onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
  }, []);

  return (
    <View>
      <Text>Practice Back Handler</Text>
    </View>
  );
}
