import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
// import { Button } from "react-native-web";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const login = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const handleSubmit = () => {
    console.log(email, psw);

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        navigation.navigate("home");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 200 }}>
      <TextInput
        style={{ border: "2px solid black", width: 300, height: 50 }}
        placeholder="Enter email"
        defaultValue={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{
          border: "2px solid black",
          width: 300,
          height: 50,
          margin: "5px",
        }}
        placeholder="password"
        defaultValue={psw}
        onChangeText={(text) => setPsw(text)}
      />
      <Button onPress={handleSubmit} title="submit"></Button>
    </View>
  );
};

export default login;
