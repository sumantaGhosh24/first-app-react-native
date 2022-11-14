import {Button, Text, ToastAndroid, View} from "react-native";

export default function PracticeToastAndroid() {
  const showToast = () => {
    ToastAndroid.show(
      "Welcome to my first react native application.",
      ToastAndroid.SHORT
    );
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "Welcome to my first react native application.",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Welcome to my first react native application.",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      50
    );
  };

  return (
    <View>
      <View>
        <Button title="show toast" onPress={showToast} />
        <Button
          title="show toast with gravity"
          onPress={showToastWithGravity}
        />
        <Button
          title="show toast with gravity and offset"
          onPress={showToastWithGravityAndOffset}
        />
      </View>
    </View>
  );
}
