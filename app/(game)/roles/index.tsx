import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
        <View style={styles.mainView}>
          <Text style={[customStyles.H1, customStyles.title]}>
            Selectonnez les cartes avec les quelles vous jouez
          </Text>
          <GridView />
          <TouchableOpacity
            style={[customStyles.button, customStyles.buttonSizeL]}
          >
            <Text style={customStyles.buttonText}>Lancer la partie</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainView: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
});
