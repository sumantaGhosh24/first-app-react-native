import {useRef} from "react";
import {Animated, Button, StyleSheet, Text, View} from "react-native";

export default function PracticeAnimated() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Animated.View style={[styles.fadingContainer, {opacity: fadeAnim}]}>
        <Text style={styles.fadingText}>Fading Text</Text>
        <View style={styles.buttonRow}>
          <Button title="fade in" onPress={fadeIn} />
          <Button title="fade out" onPress={fadeOut} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "yellow",
  },
  fadingText: {
    fontSize: 30,
  },
  buttonRow: {
    justifyContent: "center",
    marginVertical: 15,
  },
});
