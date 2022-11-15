import {Button, Text, View} from "react-native";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="go to product category"
        onPress={() => navigation.navigate("ProductCategory")}
      />
    </View>
  );
};

const ProductCategoryScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Product Category Screen</Text>
      <Button
        title="go to home page"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default function PracticeReactNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "yellow",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ProductCategory"
          component={ProductCategoryScreen}
          options={{
            title: "Product Category",
            headerBackTitle: "Back to Home",
            headerTitleStyle: {color: "blue"},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
