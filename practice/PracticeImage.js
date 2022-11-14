import {Image, StyleSheet, Text, View} from "react-native";

export default function PracticeImage() {
  return (
    <View>
      <Image
        source={require("../assets/test.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    margin: 20,
    height: 300,
    width: 300,
    borderRadius: 50,
  },
});
