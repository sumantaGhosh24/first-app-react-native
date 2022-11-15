import {useState} from "react";
import {BottomSheet, Button, ListItem} from "@rneui/themed";
import {StyleSheet} from "react-native";

export default function PracticeBottomSheet() {
  const [isVisible, setIsVisible] = useState(false);

  const list = [
    {title: "List Item 1"},
    {title: "List Item 2"},
    {
      title: "Cancel",
      containerStyle: {backgroundColor: "red"},
      titleStyle: {color: "white"},
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <>
      <Button
        title="Open Bottom Sheet"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
