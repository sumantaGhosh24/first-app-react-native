import {useState} from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";

export default function PracticeTouchableNativeFeedback() {
  const [rippleOverflow, setRippleOverflow] = useState(false);

  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => setRippleOverflow(!rippleOverflow)}
        background={TouchableNativeFeedback.Ripple("red", rippleOverflow)}
      >
        <View style={styles.touch}>
          <Text style={styles.text}>
            Touchable Native Feedback (only for android)
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  touch: {
    flex: 0.5,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    alignSelf: "center",
  },
});
