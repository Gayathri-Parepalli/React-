import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import Home from "./Home";
import Profile from "./Profile";
import login from "./login";
import Reviews from "./Reviews";
const Stack = createNativeStackNavigator();
const App = () => {
  const [name, setName] = useState("abc");
  const handleClick = () => {
    setName("Gayathri");
  };
  return (
    //  <View
    //   style={{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     fontSize: 50,
    //   }}
    // >
    //   <Text>{name}</Text>
    //   <Button onPress={handleClick} title="click Me"></Button>
    //   <TextInput
    //     defaultValue={name}
    //     onChangeText={(e) => setName(e)}
    //     style={{ width: 300, border: "2px solid black", height: 50 }}
    //   />

    //   <FlatList
    //     data={[
    //       { key: "Devin" },
    //       { key: "Dan" },
    //       { key: "Dominic" },
    //       { key: "Jackson" },
    //       { key: "James" },
    //       { key: "Joel" },
    //       { key: "John" },
    //       { key: "Jillian" },
    //       { key: "Jimmy" },
    //       { key: "Julie" },
    //     ]}
    //     renderItem={({ item }) => <Text>{item.key}</Text>}
    //   />
    //   <SectionList
    //     sections={[
    //       { title: "D", data: ["Devin", "Dan", "Dominic"] },
    //       {
    //         title: "J",
    //         data: [
    //           "Jackson",
    //           "James",
    //           "Jillian",
    //           "Jimmy",
    //           "Joel",
    //           "John",
    //           "Julie",
    //         ],
    //       },
    //     ]}
    //     renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    //     renderItem={({ item }) => <Text>{item}</Text>}

    // keyExtractor={(item, index) => `basicListEntry-${item.title}`}
    // />
    // <View>
    //   <Home />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Reviews"
          component={Reviews}
          options={{ title: "Reviews" }}
        />
        {/* <Stack.Screen name="login" component={login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
