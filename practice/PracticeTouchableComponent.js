import {useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function PracticeTouchableComponent() {
  const [student, setStudent] = useState([
    {name: "john", key: 1},
    {name: "jane", key: 2},
    {name: "joe", key: 3},
    {name: "sam", key: 4},
    {name: "smith", key: 5},
  ]);

  const handlePress = (name) => {
    alert(`${name} clicked`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={student}
        renderItem={({item}) => (
          <View key={item.key}>
            <TouchableOpacity onPress={() => handlePress(item.name)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    fontSize: 24,
    backgroundColor: "orange",
    color: "white",
    marginTop: 20,
    padding: 20,
    width: 300,
  },
});
