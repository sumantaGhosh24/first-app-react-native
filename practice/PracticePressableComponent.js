import {useState} from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

export default function PracticePressableComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? "red" : "blue"},
          styles.text,
        ]}
        onPress={() => setCount(count + 1)}
      >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    marginTop: 50,
    fontSize: 24,
  },
});
