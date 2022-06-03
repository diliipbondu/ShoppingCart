import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Navigator from "./src/Navigator";


const App = () => {
  return (
    <Provider store={store} >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigator/>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
     flex:1
  },
});
