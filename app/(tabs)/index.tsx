import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { customStyles } from "@/constants/DefaultStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <ImageBackground
      style={styles.container}
      source={require("@/assets/images/backgroundImage.jpg")}
    >
      <View style={styles.view}>
        <TouchableOpacity style={customStyles.button}>
          <Text style={customStyles.buttonText}>Jouer</Text>
          <MaterialCommunityIcons
            name="play-outline"
            style={customStyles.ButtonIcon}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={customStyles.button}
          onPress={() => {
            router.push("/(tabs)/cards");
          }}
        >
          <Text style={customStyles.buttonText}>Cartes</Text>
          <MaterialCommunityIcons
            name="cards-outline"
            style={customStyles.ButtonIcon}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={customStyles.button}
          onPress={() => {
            router.push("/(tabs)/rules");
          }}
        >
          <Text style={customStyles.buttonText}>Règles</Text>
          <MaterialCommunityIcons
            name="format-list-text"
            style={customStyles.ButtonIcon}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    height: 400,
    width: 300,
    justifyContent: "space-between",
  },
});
