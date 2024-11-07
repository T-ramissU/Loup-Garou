import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";

const RoleCard = () => {
  const test: Role = allCards[0];
  const path = require("@/assets/images/cards/Chasseur.png");

  return (
    <View style={styles.mainView}>
      <View style={styles.imageTitleView}>
        <Image source={path} style={styles.image}></Image>
        <Text style={[customStyles.H2]}>{test.Name}</Text>
      </View>
      <View style={styles.descriptionView}>
        <View style={styles.segmentView}>
          <Text style={customStyles.P1}>Pouvoir :</Text>
          <Text style={customStyles.P2}>{test.Description}</Text>
        </View>
        <View style={styles.segmentView}>
          <Text style={customStyles.P1}>Condition de victoire :</Text>
          <Text style={customStyles.P2}>{test.Victory}</Text>
        </View>
      </View>
    </View>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  mainView: {
    borderColor: theme.color.prim40,
    width: 300,
    borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    // borderRadius: theme.borderRadius.sz9,
    padding: theme.spacing.sz3,
    backgroundColor: theme.color.dark100,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
  },
  descriptionView: {
    flexGrow: 1,
    gap: theme.spacing.sz2,
  },
  segmentView: {
    gap: theme.spacing.sz1,
  },
  imageTitleView: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    gap: 10,
  },
});
