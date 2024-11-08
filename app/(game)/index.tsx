import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import { usePlayerStore } from "@/stores/PlayerStore";

const index = () => {
  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      ></ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
