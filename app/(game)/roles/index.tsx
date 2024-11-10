import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import GridTile from "./components/GridTile";
import allCard from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import GridView from "./views/GridView";

const index = () => {
  const allRoles: Role[] = allCard;

  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        <Text style={[customStyles.H1, customStyles.title]}>
          Selectonnez les cartes avec les quelles vous jouez
        </Text>
        <GridView />
      </ImageBackground>
    </View>
  );
};

export default index;
