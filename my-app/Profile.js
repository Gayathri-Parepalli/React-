import React from "react";
import { View, Text, Button } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>profile</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
};

export default Profile;
