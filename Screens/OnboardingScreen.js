import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { general, Images } from "./Data/General";
import Display from "../Display";

const OnboardingScreen = () => {
  const render = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: Display.setWidth(100),
        }}
      >
        <Image style={styles.image} source={Images[item.img]} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.des}>{item.des}</Text>
      </View>
    );
  };
  return (
    <View style={styles.header}>
      <FlatList
        data={general}
        renderItem={render}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        overScrollMode="never"
      />
  
        <TouchableOpacity>
          <Text style={styles.buttonText} >SKIP</Text>
        </TouchableOpacity>
        
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: Display.setWidth(100),
    height: Display.setHeight(30),
    resizeMode: "cover",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 24,
  },
  des: {
    fontSize: 18,
    color: "gray",
    marginHorizontal: 20,
    textAlign: "center",
  },

  // backgroundColor:'#00ced1'
});
