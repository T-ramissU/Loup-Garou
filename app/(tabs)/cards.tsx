import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import RoleCard from "@/components/RoleCard";
import { ScrollView } from "react-native-gesture-handler";

const cards = () => {
  return (
    <ImageBackground
      style={customStyles.container}
      source={require("@/assets/images/backgroundImage.jpg")}
    >
      <RoleCard />
    </ImageBackground>
  );
};

export default cards;

const styles = StyleSheet.create({});
