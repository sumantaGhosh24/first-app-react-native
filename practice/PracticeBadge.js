import {Badge} from "@rneui/themed";
import {Text, View} from "react-native";

export default function PracticeBadge() {
  return (
    <View>
      <Text>Practice Badge</Text>
      <View>
        <Badge value="30" status="success" />
        <Badge value="30" status="error" />
        <Badge value="30" status="warning" />
        <Badge value="30" status="primary" />
      </View>
    </View>
  );
}
