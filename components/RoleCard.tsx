import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import { Image } from "expo-image";

type RoleCardProps = {
  roleData: Role;
};

const imageMap = {
  "Chasseur.png": require("@/assets/images/cards/Chasseur.png"),
  "Cupidon.png": require("@/assets/images/cards/Cupidon.png"),
  "Loup-garou.png": require("@/assets/images/cards/Loup-garou.png"),
  "Petite_fille.png": require("@/assets/images/cards/Petite_fille.png"),
  "Sorciere.png": require("@/assets/images/cards/Sorciere.png"),
  "Villageois.png": require("@/assets/images/cards/Villageois.png"),
  "Voleur.png": require("@/assets/images/cards/Voleur.png"),
  "Voyante.png": require("@/assets/images/cards/Voyante.png"),
};

const RoleCard = ({ roleData }: RoleCardProps) => {
  const getBorderColor = (roleData: Role) => {
    switch (roleData.Side) {
      case "V":
        return theme.color.green;
        break;
      case "S":
        return theme.color.grey100;
        break;
      case "L":
        return theme.color.red;
        break;
      default:
        break;
    }
  };

  return (
    <View
      style={[
        styles.mainView,
        {
          borderColor: getBorderColor(roleData),
        },
      ]}
    >
      <View style={styles.imageTitleView}>
        <Image
          contentFit="fill"
          source={imageMap[roleData.Image as keyof typeof imageMap]}
          style={styles.image}
        ></Image>
        <Text style={[customStyles.H2]}>{roleData.Name}</Text>
      </View>
      <View style={styles.descriptionView}>
        <View style={styles.segmentView}>
          <Text style={customStyles.P1}>Pouvoir :</Text>
          <Text style={customStyles.P2}>{roleData.Description}</Text>
        </View>
        <View style={styles.segmentView}>
          <Text style={customStyles.P1}>Condition de victoire :</Text>
          <Text style={customStyles.P2}>{roleData.Victory}</Text>
        </View>
      </View>
    </View>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  mainView: {
    // borderColor: theme.color.prim40,
    borderWidth: 1,
    width: 300,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderRadius: theme.borderRadius.sz2,
    padding: theme.spacing.sz3,
    backgroundColor: theme.color.dark100,
    gap: theme.spacing.sz2,
  },
  image: {
    width: 100,
    height: 100,
  },
  descriptionView: {
    flexGrow: 1,
    gap: theme.spacing.sz2,
    borderWidth: 1,
    borderColor: theme.color.prim20,
    padding: theme.spacing.sz3,
    width: "100%",
  },
  segmentView: {
    gap: theme.spacing.sz1,
  },
  imageTitleView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: theme.spacing.sz4,
    width: "100%",
    justifyContent: "flex-start",
  },
});
