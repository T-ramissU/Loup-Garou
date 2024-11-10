import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const index = () => {
  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        <Text style={customStyles.H1}>Avez-vous les cartes ?</Text>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={[customStyles.button, customStyles.buttonSizeL]}
            onPress={() => {
              router.push("/(game)/roles");
            }}
          >
            <Text style={customStyles.buttonText}>Oui</Text>
            <MaterialCommunityIcons
              name="check"
              style={customStyles.ButtonIcon}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              customStyles.button,
              customStyles.buttonSizeL,
              customStyles.buttonInactive,
            ]}
            onPress={() => {
              // router.push("/(game)/");
            }}
            disabled={true}
          >
            <Text style={customStyles.buttonText}>Non</Text>
            <MaterialCommunityIcons
              name="close"
              style={customStyles.ButtonIcon}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  buttonView: {
    justifyContent: "space-evenly",
    height: 300,
  },
});
