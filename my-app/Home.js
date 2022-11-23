import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, Button } from "react-native";
// import axios from "axios";
// import data from "./data.json";

const Home = ({ navigation }) => {
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   setList(data);
  // }, []);
  // console.log(list);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text style={{ fontSize: 30 }}>Music App</Text>
      <FlatList
        style={{ fontSize: 200 }}
        data={list}
        renderItem={({ item }) => (
          <>
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <img src={item.img} />
            <audio controls>
              <source src={item.song} />
            </audio>
          </>
        )}
      /> */}
      {/* <Button
        title="see profile"
        onPress={() => navigation.navigate("Profile", { name: "gayathri" })}
      ></Button>
      <Button
        title="Reviews"
        onPress={() => navigation.navigate("Reviews")}
      ></Button> */}
      <Text> Home</Text>
    </View>
  );
};

export default Home;
