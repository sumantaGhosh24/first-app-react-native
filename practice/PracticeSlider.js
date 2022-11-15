import Slider from "@react-native-community/slider";
import {useState} from "react";
import {Text, View} from "react-native";

export default function PracticeSlider() {
  const [range, setRange] = useState();

  return (
    <View style={{margin: 20}}>
      <Text>Practice Slider {Math.floor(range)}</Text>
      <Slider
        style={{width: 250, height: 50}}
        onValueChange={(value) => setRange(value)}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor="blue"
      />
    </View>
  );
}
