import {Button, Text, Vibration, View} from "react-native";

export default function PracticeVibration() {
  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];
  const PATTERN_DESC = "wait 1s, vibrate 2s wait 3";

  return (
    <View>
      <Text>Practice Vibration</Text>
      <Button title="vibrate once" onPress={() => Vibration.vibrate()} />
      <Text>Don't use in production</Text>
      <Button
        title="vibrate for 10 seconds"
        onPress={() => Vibration.vibrate(10 * ONE_SECOND_IN_MS)}
      />
      <Button
        title={`${PATTERN_DESC}`}
        onPress={() => Vibration.vibrate(PATTERN, true)}
      />
      <Button
        title="vibrate with patter"
        onPress={() => Vibration.vibrate(PATTERN)}
      />
      <Button
        title="stop vibration pattern"
        onPress={() => Vibration.cancel()}
        color="red"
      />
    </View>
  );
}
