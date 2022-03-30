import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Image, Button, TextInput, Text, View } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState("Username, Email & Phone");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Text>Welcome Back</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Button title="SignIn" />
       <Text>Forget Password?</Text>
      <Text>or Signup With</Text>
      <Image source={require("./assets/Facbook.png")}/>
      <Image source={require("./assets/Group.png")}/>
      <Image source={require("./assets/Googlelogo.png")}/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

