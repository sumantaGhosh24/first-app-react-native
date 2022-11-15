import {Avatar} from "@rneui/themed";
import {View} from "react-native";

export default function PracticeAvatar() {
  return (
    <View>
      <Avatar
        size={64}
        rounded
        title="SG"
        containerStyle={{backgroundColor: "blue"}}
      />
    </View>
  );
}
