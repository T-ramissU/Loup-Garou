import {
  FlatList,
  ImageBackground,
  ListRenderItem,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import theme, { customStyles } from "@/constants/DefaultStyles";
import RoleCard from "@/components/RoleCard";
import allCards from "@/assets/cards/origin.json";
import { Role } from "@/interfaces/RoleInterface";
import RoleTile from "@/components/RoleTile";

const cards = () => {
  const allRoles: Role[] = allCards;

  return (
    <View style={customStyles.container}>
      <ImageBackground
        style={customStyles.imageBgContainer}
        source={require("@/assets/images/backgroundImage.jpg")}
      >
        <View style={styles.mainView}>
          {allRoles.map((role) => (
            <RoleTile roleData={role} key={role.Name} />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default cards;

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 15,
  },
  mainView: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "space-evenly",
    justifyContent: "flex-start",
    // gap: 10,
    columnGap: 5,
    height: 500,

    paddingLeft: theme.spacing.sz2,
  },
});
