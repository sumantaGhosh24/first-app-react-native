import {StatusBar} from "expo-status-bar";
import {Platform, PlatformColor, StyleSheet, Text, View} from "react-native";

import {PracticeReactNavigation} from "./practice";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Text style={styles.label}>This is platform color</Text>
//       <View>
//         <Text>OS = {Platform.OS}</Text>
//         <Text>OS Version = {Platform.Version}</Text>
//         <Text>Is TV = {Platform.isTV.toString()}</Text>
//         {Platform.OS === "ios" && (
//           <>
//             <Text>Is Pad {Platform.isPad.toString()}</Text>
//           </>
//         )}
//         <Text>Constants {JSON.stringify(Platform.constants, null, 2)}</Text>
//       </View>
//     </View>
//   )
// }

export default function App() {
  return <PracticeReactNavigation />;
}

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    // marginTop: 25,
  },
  label: {
    padding: 25,
    ...Platform.select({
      ios: {
        color: PlatformColor("label"),
        backgroundColor: PlatformColor("systemTealColor"),
      },
      android: {
        color: PlatformColor("?android:attr/textColor"),
        backgroundColor: PlatformColor("@android:color/holo_blue_bright"),
      },
      default: {
        color: "black",
      },
    }),
  },
});
