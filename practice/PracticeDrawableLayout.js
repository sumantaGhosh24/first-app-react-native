import {useRef, useState} from "react";
import {
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PracticeDrawableLayout() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const drawerView = () => (
    <View>
      <Text styles={styles.paragraph}>I am in the drawer component</Text>
      <Button title="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={drawerView}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Drawer on the {drawerPosition} (currently not working)
        </Text>
        <Button
          title="Change Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press the button
        </Text>
        <Button
          title="open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  paragraph: {
    padding: 15,
    fontSize: 15,
    textAlign: "center",
  },
});
