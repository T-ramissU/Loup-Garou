import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Role } from "@/interfaces/RoleInterface";
import { ImageBackground } from "expo-image";
import { imageMap } from "@/constants/CardImages";
import { customStyles } from "@/constants/DefaultStyles";

type CardTileProps = {
  card: Role;
};

const CardTile = ({ card }: CardTileProps) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imageTitleView}>
        <Text style={[customStyles.H2]}>{card.Name} : </Text>
        <Text style={customStyles.H2}>{card.Number}</Text>
      </View>
      <Image
        source={imageMap[card.Image as keyof typeof imageMap]}
        style={styles.image}
      ></Image>
    </View>
  );
};

export default CardTile;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
  mainView: {
    margin: 10,
    overflow: "hidden",
    shadowColor: "#000",

    justifyContent: "center",
    alignItems: "center",
  },
  imageTitleView: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
