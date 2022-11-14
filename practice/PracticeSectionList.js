import {SectionList, StyleSheet, Text, View} from "react-native";

export default function PracticeSectionList() {
  const language = [
    {title: "Frontend", data: ["Html", "Css", "JavaScript"]},
    {title: "Backend", data: ["Php", "NodeJs", "ExpressJs"]},
    {title: "Database", data: ["Mysql", "MongoDb"]},
    {title: "Framework", data: ["React", "Django", "Laravel"]},
  ];

  const HandleData = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View>
      <SectionList
        sections={language}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <HandleData title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "blue",
    padding: 20,
    marginVertical: 10,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
