
import React from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  Platform,
  StatusBar,
  Text,
} from "react-native";

export default function App() {

  return (
    <>
          <View Style={styles.container}>
          
          <Image source={require("./assets/Saly-1intro-image.png")}/>        
          <Text>Discover Your Own Dream House</Text>
          <Text>wn Dream House</Text>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </Text>
          <Button title="SignIn" />
          <Button title="Register" />
          </View> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
        alignItems: "center",},
        
        Text:{
          justifyContent: "center",
          fontWeight: 'bold',
        },
  
});
