import {useState} from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PracticeList() {
  const [student, setStudent] = useState([
    {name: "john", key: 1},
    {name: "jane", key: 2},
    {name: "joe", key: 3},
    {name: "sam", key: 4},
    {name: "smith", key: 5},
  ]);

  const addRandom = () => {
    const randomKey = Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
    setStudent([...student, {name: `random ${randomKey}`, key: randomKey}]);
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <Button title="Add Random" onPress={addRandom} />
        {student.map((item) => (
          <Text style={styles.name} key={item.key}>
            {item.name}
          </Text>
        ))}
      </ScrollView>

      <FlatList
        data={student}
        style={styles.flatList}
        renderItem={({item}) => (
          <Text style={styles.name} key={item.key}>
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    marginBottom: 50,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "blue",
    color: "white",
    padding: 20,
    width: 250,
  },
  flatList: {
    marginTop: 50,
  },
});
